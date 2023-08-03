import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <div class="image" *ngFor="let link of links; let i = index">
    <img src="{{link}}">
    <button class="remove" (click)="links.splice(i, 1)">X</button>
  </div>
</div>`
})

export class ImageGallery {
  @Input() links: string[];
}
