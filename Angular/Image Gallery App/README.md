# Image Gallery App
https://www.testdome.com/questions/angular/image-gallery-app/87213

An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:
```HTML
<div>
  <div class="image">
    <img src="https://bit.ly/3lmYVna">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj">
    <button class="remove">X</button>
  </div>
</div>
```
Implement the _ImageGallery_ component that accepts a _links_ input and renders the gallery described above so that the first item in the _links_ input is the _src_ attribute of the first image in the gallery. It should also implement the following logic: When the button is clicked, the image that is in the same div as the button should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this:
```HTML
<div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj">
    <button class="remove">X</button>
  </div>
</div>
```

```TypeScript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  
</div>`
})

export class ImageGallery {
  @Input() links: string[];
}
```
