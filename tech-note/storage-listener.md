---
title: Storage Listener
date: January 2022
---

If we want to update a status crossing the pages, one approach is to use the localstorage with a listener.  

For example, there are Page A and Page B, if we set the storage in Page B based on the user operation, having a storage listener in Page A, when the user moves back to Page A, we can show the pre-updated content.    

The listener could be easy to handle as below.  

```tsx
const storageHandler = useCallback(() => {
  const currentKey =
    localStorage.getItem(createLabel('refresh-key')) ?? '';
  requestKey !== currentKey && setRequestKey(currentKey);
}, [requestKey]);

useEffect(() => {
  window.addEventListener('storage', storageHandler);
  return (): void => window.removeEventListener('storage', storageHandler);
}, [storageHandler]);
```

Notice that we need to manually dispatch the event if the listener is on the same page where the storage has been set.  

```tsx
window.dispatchEvent(new Event('storage'));
```
