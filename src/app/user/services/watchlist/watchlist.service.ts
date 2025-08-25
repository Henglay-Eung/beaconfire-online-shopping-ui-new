import { Injectable } from '@angular/core';
import { BASE_API_ENDPOINT} from '../../../config/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  
  constructor(private httpClient: HttpClient) { }

  CURR_ENDPOINT = 'watchlist/'

  getAllProductsInWatchlist(): Observable<ApiResponse<Product[]>> {
    return this.httpClient.get<ApiResponse<Product[]>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT);
  }

  removeProductFromWatchlist(id: number): Observable<ApiResponse<Product>> {
    return this.httpClient.delete<ApiResponse<Product>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT + id);
  }

  addProductToWatchlist(id: number): Observable<ApiResponse<Product>> {
    return this.httpClient.post<ApiResponse<Product>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT + id, {});
  }
  

}
