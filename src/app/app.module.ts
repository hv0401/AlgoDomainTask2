import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponenetComponent } from './header-componenet/header-componenet.component';
import { ShoppingCartComponentComponent } from './shopping-cart-component/shopping-cart-component.component';
import { ProductCardComponentComponent } from './product-card-component/product-card-component.component';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenetComponent,
    ShoppingCartComponentComponent,
    ProductCardComponentComponent,
    CheckoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
