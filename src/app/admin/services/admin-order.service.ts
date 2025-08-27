import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BASE_ADMIN_API_ENDPOINT } from 'src/app/config/base-api';
import { ApiResponse, PagableApiResponse } from 'src/app/models/api-response.model';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { Order, CreateOrder } from 'src/app/user/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

 constructor(private http: HttpClient) { }

 CURR_ENDPOINT = 'orders/';

  getOrderList(page: number, pageSize: number): Observable<PagableApiResponse<Order[]>> {
    let url = BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT;
    if (page >= 0) {
      url += `?page=${page}&`;
    } 
    if (pageSize >= 1) {
      url += `pageSize=${pageSize}`;
    } 
    
    return this.http.get<PagableApiResponse<Order[]>>(url);
  }

  getOrderDetailsById(id: number): Observable<ApiResponse<OrderDetails>> {
    return this.http.get<ApiResponse<OrderDetails>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + id);
  }

  completeOrderById(id: number): Observable<void> {
    return this.http.patch<void>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'complete/' + id, {});
  }

  cancelOrderById(id: number): Observable<ApiResponse<OrderDetails>> {
    return this.http.patch<ApiResponse<OrderDetails>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'cancel/' + id, {});
  }

}
