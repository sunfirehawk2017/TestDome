# Shopping Component
https://www.testdome.com/questions/angular/shopping-component/87214

Finish the _ShoppingList_ component. The component will receive an array of strings as the _items_ array. It should render one _li_ element per item in the array.

For example, if the _items_ array is ["Bread", "Eggs", "Milk"], the rendered HTML should look like:
```HTML
<ul>
  <li>Bread</li>
  <li>Eggs</li>
  <li>Milk</li>
</ul>
```

```TypeScript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: `<div>
  <ul>
    <li></li>
  </ul>
</div>`
})

export class ShoppingList {
  @Input() items: string[];
}
```
