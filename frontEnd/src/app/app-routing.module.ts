import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/adminView/admin.component';
import { CategoriesListComponent } from './components/adminView/categories-list/categories-list.component';
import { CategoryComponent } from './components/adminView/category/category.component';
import { DashboardComponent } from './components/adminView/dashboard/dashboard.component';
import { LandingPageComponent } from './components/customerView/landingPage/landing-page.component';
import { ProductDetailsComponent } from './components/customerView/productDetails/product-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  // { path: '', component: AdminComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'productDetail/:id', component: ProductDetailsComponent },
  { path: 'categoriesList/:id', component: CategoriesListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
