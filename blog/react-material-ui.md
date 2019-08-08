## 2019/08

**React-material-UI** [Official Document](https://material-ui.com/getting-started/)

### Get started

- Installation

```javascript
import Button from '@material-ui/core/Button';
function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
```

### Components

- Notice: The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last.

### Styles

