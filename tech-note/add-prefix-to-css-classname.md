---
title: Add Prefix to CSS ClassName
time: January 2022
corporation: CTW
---

We can actually manipulate our CSS class names without touching the CSS processor.  

This came out to me when I realized that the CSS styles read via CSS-module are actually normal Objects.  

The reason why I want to touch the class names is, in most cases when the system goes larger and the components become nested, it's quite hard for a new teammate to directly tell which component is via the Chrome debug console or the React devTools.  

If we can, by any approach, read out which component it is by watching the DOM elements directly, it would save a lot of effort without any other support tools. So I came to the idea to add a component name prefix for corresponding class names.  

- useClass.tsx

```tsx
interface Classes {
  [key: string]: string;
}

/**
 * The hook to generate the classname without optional prefix
 * @param classes the classes import from the css module
 * @param prefix the common prefix provided
 * @returns
 */
export const useClass = (classes: Classes, prefix?: string): Classes => {
  const delimiter = '-';
  return Object.fromEntries(
    Object.entries(classes).map((x) => {
      return [
        prefix && x[0].startsWith(prefix)
          ? x[0].slice(prefix.length + delimiter.length)
          : x[0],
        x[1],
      ];
    }),
  );
};
```

Now we can manually combine the class names in CSS files like this

- Sample.module.scss

```scss
.others {
  color: white;
}

.Sample { // the Component name
  &-yourClass { // the Class name
    display: flex;
    // ...
  }
  &-otherLocalClasses {
    // ...
  }
}
```

The usage could be like below

- Sample.tsx

```tsx
import { useClass } from '@/hooks';
import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';

import styles from './Sample.module.scss';

export function Sample() {
  const cls = useClass(styles, 'Sample'); // set the Component name here
  return <div className={classnames(styles.others, cls.yourClass)} />;
}
```

Notice that we can't directly get the component name via the JS function to use as the prefix for the production environment, cause it could be obfuscated during the compilation. One way or another, if we want to expand the usage here, we could probably move our foot to the customized CSS processor.  
