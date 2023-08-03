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

export class Address {
  street: String;
  city: String;
  zipCode: String;
}

@Component({
  selector: 'app-address',
  template: `<p>{{ address.street }}</p>
             <p>{{ address.city }}</p>
             <p>{{ address.zipCode }}</p>`
})
export class AddressComponent {

  @Input() address: Address;
  constructor() { }
}

@Component({
  selector: 'app-address-list',
  //Update this template
  template: `<ul>
               <li>
               </li>
             </ul>`
})
export class AddressListComponent {

  @Input() addresses: Address[] = [{ street: "Street 1", city: "New York", zipCode: "1000" },
                                   { street: "Street 2", city: "Washington", zipCode: "2000" }];
  constructor() { }
}
// When copying to the TestDome environment, don't copy anything after this comment

// Main component
@Component({
  selector: 'app-main',
  template: `<app-address-list [addresses]="[{ street: 'Street 1', city: 'New York', zipCode: '1000' }, { street: 'Street 2', city: 'Washington', zipCode: '2000' }]"></app-address-list>`
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
// Module declaration
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddressListComponent, AddressComponent ],
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
