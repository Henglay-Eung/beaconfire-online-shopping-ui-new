import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  displayedColumns: string[] = ['orderId', 'datePlaced', 'orderStatus', 'actions'];
  orders: Order[] = [];

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe(data => {
      this.orders = data;
    })
  }

}
