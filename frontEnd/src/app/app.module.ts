import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderContainerComponent } from './components/customerView/landingPage/header-container/header-container.component';
import { HeroComponent } from './components/customerView/landingPage/hero/hero.component';
import { TrendingProductComponent } from './components/customerView/landingPage/trending-product/trending-product.component';
import { CallActionComponent } from './components/customerView/landingPage/call-action/call-action.component';
import { BannerComponent } from './components/customerView/landingPage/banner/banner.component';
import { ShippingComponent } from './components/customerView/landingPage/shipping/shipping.component';
import { FooterComponent } from './components/customerView/landingPage/footer/footer.component';
import { PreloaderComponent } from './components/customerView/preloader/preloader.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/customerView/landingPage/landing-page.component';
import { ProductDetailsComponent } from './components/customerView/productDetails/product-details.component';
import { BreadcrumsComponent } from './components/customerView/productDetails/breadcrums/breadcrums.component';
import { ItemDetailsComponent } from './components/customerView/productDetails/item-details/item-details.component';
import { ReviewModalComponent } from './components/customerView/productDetails/review-modal/review-modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/customerView/landingPage/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './components/adminView/side-bar/side-bar.component';
import { AdminComponent } from './components/adminView/admin.component';
import { CategoriesListComponent } from './components/adminView/categories-list/categories-list.component';
import { SublevelMenuComponent } from './components/adminView/side-bar/sublevel-menu.component';
import { DashboardComponent } from './components/adminView/dashboard/dashboard.component';
import { CategoryComponent } from './components/adminView/category/category.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HeroComponent,
    TrendingProductComponent,
    CallActionComponent,
    BannerComponent,
    ShippingComponent,
    FooterComponent,
    PreloaderComponent,
    LoginComponent,
    LandingPageComponent,
    ProductDetailsComponent,
    BreadcrumsComponent,
    ItemDetailsComponent,
    ReviewModalComponent,
    ProductComponent,
    SideBarComponent,
    AdminComponent,
    CategoriesListComponent,
    SublevelMenuComponent,
    DashboardComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
