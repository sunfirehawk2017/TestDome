# Welcome
https://www.testdome.com/questions/angular/welcome/30729

Consider the following component:
```TypeScript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `<h1>Welcome to {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class WelcomeComponent  {
  @Input() name: string;
}
```
Select the statements about its use (in another components template or module) that are correct.

(Select all acceptable answers.)
## Good Answers
```TypeScript
<welcome name="TestDome"></welcome> will display: "Welcome to TestDome!".
```
```TypeScript
@NgModule({ declarations: [ WelcomeComponent ] }) export class WelcomeModule {} declares that the welcome component belongs to the welcome module.
```
## Bad Answers
```TypeScript
<welcome></welcome> will display nothing.
```
```TypeScript
<hello name="{{ name }}"></hello> will display: "Welcome to name!".
```
