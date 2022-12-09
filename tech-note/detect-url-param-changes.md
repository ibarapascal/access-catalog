---
title: Detect URL param changes
date: December 2021
---

## Background

We had a page showing complex content that was filtered by multiple parameters, since we want to make sure the user could access directly via the saved URL, we decide to directly put the main filter attributes inside the URL query parameters.  

Once the page is loaded, we read the params and make the request, the operations user made using the site could also change those parameters as well.  

We are using the [Recoil](https://github.com/facebookexperimental/Recoil) as the status management tool with the [data-queries](https://recoiljs.org/docs/guides/asynchronous-data-queries/) to fetch the data, directly cache and save the response automatically.  

The requirement came out to be like

- a common method to detect if URL changes  
- once changes
  - provide a unique key to refresh the cached response (make a new request)  
  - provide an optional callback for each pages handler  

## Solution

Since we want to detect changes and use the side effect for third-party usage, we quickly came to the idea of using Effect inside a customized hook.  

- useRequestIdWithEffect.tsx

```tsx
import { requestIdState } from '@/states';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export interface UseRequestIdWithEffectReturn {
  requestId: string;
}

const INIT_REQUEST_ID = '';

// the reserved location.key value from react-router-dom
// when there are no query parameters, its value changes to this
const RESERVED_DEFAULT_KEY = 'default';

/**
 * The hook to acquire the unique requestId to refresh the request cache with customizable Effect
 * @param onReset the callback to handle the changes
 * @returns the requestId
 */
export const useRequestIdWithEffect = (
  onReset?: () => void,
): UseRequestIdWithEffectReturn => {
  const location = useLocation();
  const [requestId, setRequestId] = useRecoilState(requestIdState);
  useEffect(() => {
    if (![RESERVED_DEFAULT_KEY, requestId].includes(location.key)) {
      // if init, do not call the reset
      onReset && requestId !== INIT_REQUEST_ID && onReset();
      setRequestId(location.key);
    }
  }, [location.key, onReset, requestId, setRequestId]);
  // do no use requestId directly as the response, which could lead to unnecessary repeated request
  return {
    requestId:
      location.key === RESERVED_DEFAULT_KEY ? `${RESERVED_DEFAULT_KEY}-${requestId}` : location.key,
  };
};
```

- atom.ts

```tsx
export const requestIdState = atom<string>({
  key: 'requestIdState',
  default: INIT_REQUEST_ID,
});
```

Using [react-router-dom](https://www.npmjs.com/package/react-router-dom), we find out the `location.key` would change to a new hash value every time the query parameter changes, but would keep as a reserved default value when all the query parameters are gone.  

So we made a merge for the response and added the condition to trigger the callback function, and now it works as expected!

Notice that we are using the global recoil state to manage the `requestId` rather than using a React state inside that hook.

The actual usage with recoil could be like below

- App.tsx

```tsx
const resetHandler = useCallback(() => {
  // ... do something additional when URL changes
}, [])

const { requestId } = useRequestIdWithEffect(resetHandler);

const { data: responseData } = useRecoilValue(
  acquireXXX({
    requestId,
    params: {
      // ... the original request parameters
    },
  }),
);
```

- dataQueries.ts

```tsx
import { atomFamily, selector, selectorFamily } from 'recoil';

export const acquireXXX = atomFamily({
  key: 'acquireXXX',
  default: async (params: RequestXXXWrapper): Promise<ResponseXXX> => {
    return fetchDataWithBoundary(getXXX, params);
  },
});
```

## Something More

### About Cache

Cache management for query fetch libs needs a closer look case by case. For `GraphQL` for example, they have some pre-set options, for Recoil, using an actually unused request key as one of the request parameters is kind of tricky.

However, since we can fully control how the key changes, there is actually no blocker for the requirements we need to achieve by using this approach, but we can still expect to have more options to handle it as time goes by.

If you are using `react-query` you could control the cache directly, check their docs [here](https://tanstack.com/query/v4/docs/reference/QueryCache).  

### About the URL changes

The above hook fully relies on the `react-router-dom`, if we change to other frameworks like `UMI` or other router libs, we need to update our hook accordingly, but the method itself could probably maintain the same.
