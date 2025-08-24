import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, take, tap } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  products: Product[] = [{
    productId: 1,
    name: "Juice",
    description: "Natural",
    retailPrice: 5,
    wholesalePrice: 6
  }];
  getProductList(): Observable<Product[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.products).pipe(map(products => products.find(product => product.productId === id)));
  }
  
}
