### Position

- [Relative / Absolute position](https://disenowebakus.net/en/position-div-css)

```css
div.dragLabelDiv{
...
  position:relative;
}
div.absoluteDiv{
  position: absolute;
  white-space: nowrap;
}
```
```html
<div class="absoluteDiv"
    id="timeDrag"
    [style.top]="lengthTimeSetPosition + 'px'"
    [style.left]="'-65px'">
</div>
```


### Text layout

- [How to allow text to spill outside div](https://stackoverflow.com/questions/19302419/how-to-allow-text-to-spill-outside-div)

```css
div.text{
    white-space: nowrap;
    white-space: normal;
}
```