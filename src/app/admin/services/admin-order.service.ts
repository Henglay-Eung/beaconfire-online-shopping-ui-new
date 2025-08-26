import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BASE_ADMIN_API_ENDPOINT } from 'src/app/config/base-api';
import { ApiResponse } from 'src/app/models/api-response.model';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { Order, CreateOrder } from 'src/app/user/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

 constructor(private http: HttpClient) { }

 CURR_ENDPOINT = 'orders/';

  getOrderList(): Observable<ApiResponse<Order[]>> {
    return this.http.get<ApiResponse<Order[]>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT);
  }

  orderDetails: OrderDetails = {
    orderId: 1,
    datePlaced: new Date(Date.now()),
    orderStatus: "Completed",
    orderItems: [
      {
        itemId: 1,
        quantity: 1,
        purchasePrice: 1,
        wholesalePrice: 2,
        productId: 1
      },
       {
        itemId: 2,
        quantity: 1,
        purchasePrice: 1,
        wholesalePrice: 2,
        productId: 1
      },
       {
        itemId: 3,
        quantity: 1,
        purchasePrice: 1,
        wholesalePrice: 2,
        productId: 1
      }
    ]
  }

  getOrderDetailsById(id: number): Observable<ApiResponse<OrderDetails>> {
    return this.http.get<ApiResponse<OrderDetails>>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + id);
  }

  completeOrderById(id: number): Observable<void> {
    return this.http.patch<void>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'complete/' + id, {});
  }

  cancelOrderById(id: number): Observable<void> {
    return this.http.patch<void>(BASE_ADMIN_API_ENDPOINT + this.CURR_ENDPOINT + 'cancel/' + id, {});
  }

}
