import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { OrderDetails } from 'src/app/models/order-details.model';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 constructor(private http: HttpClient) { }
  orders: Order[] = [{
    orderId: 1,
    datePlaced: new Date(Date.now()),
    orderStatus: "Completed"
  }];
  getOrderList(): Observable<Order[]> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.orders);
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

  getOrderDetailsById(id: number): Observable<OrderDetails> {
    // return this.http.get<Product[]>(BASE_API_ENDPOINT + 'product');
    return of(this.orderDetails);
  }

  cancelOrderById(id: number): Observable<boolean> {
    return of(true);
  }
}
