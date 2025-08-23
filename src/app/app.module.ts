import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './user/product/product.component';
import { MatTableModule }  from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatIconModule} from '@angular/material/icon';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { MatCardModule} from '@angular/material/card';
import { OrderComponent } from './user/order/order.component';
import { OrderDetailComponent } from './user/order-detail/order-detail.component';
import { TopItemsComponent } from './user/order/top-items/top-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    SignUpComponent,
    WatchlistComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    OrderComponent,
    OrderDetailComponent,
    TopItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
