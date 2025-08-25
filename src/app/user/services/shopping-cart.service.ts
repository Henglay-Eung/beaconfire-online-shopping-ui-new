import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateShoppingCartItem, ShoppingCartItem } from '../models/shopping-cart-item.model';
import { Observable } from 'rxjs';
import { BASE_API_ENDPOINT } from 'src/app/config/base-api';
import { ApiResponse } from 'src/app/models/api-response.model';
import { ShoppingCart } from '../models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private httpClient: HttpClient) { }

  CURR_ENDPOINT = 'shopping-cart/'

  getShoppingCart(): Observable<ApiResponse<ShoppingCart>> {
    return this.httpClient.get<ApiResponse<ShoppingCart>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT);
  }

  addItemToShoppingCart(item: CreateShoppingCartItem): Observable<ApiResponse<ShoppingCart>> {
    return this.httpClient.post<ApiResponse<ShoppingCart>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT, item);
  }

  removeItemFromShoppingCard(id: number): Observable<ApiResponse<ShoppingCart>> {
    return this.httpClient.delete<ApiResponse<ShoppingCart>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT + `items/${id}`);
  }

}
