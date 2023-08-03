# Address Template
https://www.testdome.com/questions/angular/address-template/87212

Finish the _AddressListComponent's_ template so that it renders one _li_ element per address and it correctly one-way binds each field of the _AddressComponent_ field.

For example, if the _addresses_ array is:

```
[{ street: "Third Avenue‎", city: "New York", zipCode: "10001" },
{ street: "Constitution Avenue", city: "Washington", zipCode: "20001" }]
```
the template should render to:

```HTML
<ul>
  <li>
    <app-address>
      <p>Third Avenue</p>
      <p>New York</p>
      <p>10001</p>
    </app-address>
  </li>
  <li>
    <app-address>
      <p>Constitution Avenue</p>
      <p>Washington</p>
      <p>20001</p>
    </app-address>
  </li>
</ul>
```

```TypeScript
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

  @Input() addresses: Address[] = [{ street: "Third Avenue", city: "New York", zipCode: "10001" },
                                   { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }];
  constructor() { }
}
```
