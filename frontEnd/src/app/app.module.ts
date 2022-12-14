import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrendingProductComponent } from './components/trending-product/trending-product.component';
import { CallActionComponent } from './components/call-action/call-action.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { LoginComponent } from './components/login/login.component';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
