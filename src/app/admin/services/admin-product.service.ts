import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminProduct, CreateProduct, Product, UpdateProduct } from 'src/app/user/models/product.model';
import { ProductSold } from '../models/product-sold.model';
import { ProductProfit } from '../models/product-profit.model';
import { BASE_ADMIN_API_ENDPOINT}from '../../config/base-api';
import { ApiResponse } from 'src/app/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) { }

  CURR_ENDPOINT = 'products/';

  products: Product[] = [{
    productId: 1,
    name: "Juice",
    description: "Natural",
    retailPrice: 5,
    wholesalePrice: 6
  }];

  productSoldList: ProductSold[] = [
    {
      productId: 1,
      name: "Juice",
      description: "Natural",
      retailPrice: 5,
      wholesalePrice: 6,
      saleCount: 1
    }
  ]


  productProfitList: ProductProfit[] = [
    {
      productId: 1,
      name: "Juice",
      description: "Natural",
      retailPrice: 5,
      wholesalePrice: 6,
      profit: 3000
    }
  ]

  getProductList(): Observable<ApiResponse<AdminProduct[]>> {
    return this.http.get<ApiResponse<AdminProduct[]>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT);
  }

  getProductById(id: number): Observable<ApiResponse<AdminProduct>> {
    return this.http.get<ApiResponse<AdminProduct>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + id);
  }

  getProductProfitList(): Observable<ApiResponse<ProductProfit[]>> {
    return this.http.get<ApiResponse<ProductProfit[]>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'profit/3');
  }

  getTop3ProductList(): Observable<ApiResponse<ProductSold[]>> {
    return this.http.get<ApiResponse<ProductSold[]>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'popular/3');
  }

  getProductSoldList(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'sold');
  }

  addNewProduct(product: CreateProduct) {
    return this.http.post(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT, product);
  }

  updateProduct(id: number, product: UpdateProduct) {
    return this.http.patch(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + id, product);
  }
  
}
