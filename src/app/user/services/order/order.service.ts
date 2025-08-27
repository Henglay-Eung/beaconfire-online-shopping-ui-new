import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { CreateOrder, Order } from 'src/app/user/models/order.model';
import { BASE_API_ENDPOINT} from '../../../config/base-api';
import { Product } from '../../models/product.model';
import { ApiResponse } from 'src/app/models/api-response.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

 constructor(private http: HttpClient) { }

 CURR_ENDPOINT = 'orders/';

  getOrderList(): Observable<ApiResponse<Order[]>> {
    return this.http.get<ApiResponse<Order[]>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT);
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
    return this.http.get<ApiResponse<OrderDetails>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT + id);
  }

  cancelOrderById(id: number): Observable<void> {
    return this.http.patch<void>(BASE_API_ENDPOINT + this.CURR_ENDPOINT + 'cancel/' + id, {});
  }

  placeAnOrder(item: CreateOrder): Observable<ApiResponse<OrderDetails>> {
    return this.http.post<ApiResponse<OrderDetails>>(BASE_API_ENDPOINT + this.CURR_ENDPOINT, item);
  }
}
