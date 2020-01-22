# More

## Other dev tools

### picker

- [extension: color-picker](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en)

- [extension: font-picker](https://chrome.google.com/webstore/detail/font-picker/mmjbimgpcbaegjiieojddickpjbdkeej)

### generic

- [Css code generator](https://html-css-js.com/css/generator/)

- [HTML unicode](http://www.amp-what.com/unicode/search/)

- [Material icon and color](https://www.materialpalette.com/icons), [M-UI icons document](https://material-ui.com/components/material-icons/), [M-UI colors document](https://material-ui.com/customization/color/)

- [Placeholder img](https://dummyimage.com/)

### transform

- [Timestamp](https://www.timestampconvert.com/)

- [Color](https://www.color-hex.com/)

- [Img/Video/Audio](https://www.onlineconverter.com/)

- [Csv](http://www.convertcsv.com/)

### visualize

- [Online csv chart](https://plot.ly/create/#/)

## Usage

gource

```shell
gource --seconds-per-day 0.5 -1920x1080 --auto-skip-seconds 0.5
```

redux, redux-devtools, thunk, micro-service with React

```tsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import App from './components/index';
import 'react-app-polyfill/ie11';

(async () => {
  const preloadStore = {
  };
  const store = createStore(
    reducer,
    preloadStore,
    composeWithDevTools( // use redux-devTools via HOC
      applyMiddleware(thunk)
    )
  );
  window.renderYourProject = (containerId, _) => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(containerId)
    );
  };
  window.unmountYourProject = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
})();
```
