// Create a new Angular project

// Replace contents of src/index.html with the following:
// <app-main></app-main>

// Replace contents of src/main.ts with the following:
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Starting template, when copying to the TestDome environment, don't copy anything before this comment:
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
// When copying to the TestDome environment, don't copy anything after this comment

// Main component
@Component({
  selector: 'app-main',
  template: `<app-root [items]="['Bread', 'Eggs', 'Milk']"></app-root>`
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
// Module declaration
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShoppingList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// Bootstrapping Angular
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch(err => console.error(err));
