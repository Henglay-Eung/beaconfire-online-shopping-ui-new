import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Product } from 'src/app/user/models/product.model';
import { ProductSold } from '../models/product-sold.model';
import { ProductProfit } from '../models/product-profit.model';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) { }
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

  getProductList(): Observable<Product[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.products).pipe(map(products => products.find(product => product.productId === id)));
  }

  getProductProfitList(): Observable<ProductProfit[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.productProfitList);
  }

  getTop3ProductList(): Observable<ProductSold[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.productSoldList);
  }

  getProductSoldList(): Observable<ProductSold[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.productSoldList);
  }
  
}
