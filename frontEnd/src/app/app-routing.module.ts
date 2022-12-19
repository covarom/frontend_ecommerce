import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/customerView/landingPage/landing-page.component';
import { ProductDetailsComponent } from './components/customerView/productDetails/product-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'productDetail', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
