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
    ReviewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
