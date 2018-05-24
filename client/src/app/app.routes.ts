import { Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { LandingComponent } from './landing/landing.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent},
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
  { path: 'products/order/product', component: ProductCartComponent},  //just for testing 
  { path: '**', redirectTo: '' }

];
