import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, take, tap } from 'rxjs';
import { Product, ShoppingCartItemUser } from '../../models/product.model';
import { BASE_API_ENDPOINT } from 'src/app/config/base-api';
import { ApiResponse } from 'src/app/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  ENDPOINT = 'products/';

  getProductList(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(BASE_API_ENDPOINT + this.ENDPOINT);
  }

  getProductById(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(BASE_API_ENDPOINT + this.ENDPOINT + id);  }
  

  getTop3MostFrequentlyPurchasedProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(BASE_API_ENDPOINT + this.ENDPOINT + 'frequent/3');
  }

    getTop3MostRecentlyPurchasedProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(BASE_API_ENDPOINT + this.ENDPOINT + 'recent/3');
  }
}
