# Router Module
https://www.testdome.com/questions/angular/router-module/26712

Consider the following application module:
```TypeScript
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home.component';
import { ItemDetailComponent }  from './item-detail.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'detail/:id', component: ItemDetailComponent, outlet: 'route1' }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
```
Which of the following statements about the routers behavior are correct?

(Select all acceptable answers.)

## Good Answers
* Optional parameters can be passed to any component via the query parameters of the ActivatedRoute.
* /detail/100 will use the <router-outlet name='route1'> to determine the position of the view.
## Bad Answers
* The home component can only be accessed via the root URL redirect.
* The id parameter is optional when a call is made to the /detail/ URL.
* Route that redirects to HomeComponent would activate on same routes if the pathMatch: 'full' property was removed.
