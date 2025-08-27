import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './user/product/product.component';
import { MatTableModule }  from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatIconModule} from '@angular/material/icon';
import { WatchlistComponent } from './user/watchlist/watchlist.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { MatCardModule} from '@angular/material/card';
import { OrderComponent } from './user/order/order.component';
import { OrderDetailComponent } from './user/order-detail/order-detail.component';
import { AdminOrderComponent } from './admin/order/admin-order.component';
import { AdminHomepageComponent } from './admin/homepage/admin-homepage.component';
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductDetailsComponent } from './admin/admin-product-details/admin-product-details.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin/admin-update-product/admin-update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AdminInsightComponent } from './admin/admin-insight/admin-insight.component';
import { InsightsComponent } from './user/insights/insights.component';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    HomepageComponent,
    InsightsComponent,

    AdminOrderComponent,
    AdminOrderDetailsComponent,
    AdminProductComponent,
    AdminProductDetailsComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    AdminHomepageComponent,
    AdminInsightComponent
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
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
