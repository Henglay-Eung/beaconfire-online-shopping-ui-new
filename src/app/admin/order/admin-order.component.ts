import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/user/models/order.model';
import { OrderService } from 'src/app/user/services/order/order.service';
import { ProductService } from 'src/app/user/services/product/product.service';
import { AdminProductService } from '../services/admin-product.service';

@Component({
  selector: 'app-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  displayedColumns: string[] = ['orderId', 'datePlaced', 'orderStatus', 'actions'];
  orders: Order[] = [];

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe(data => {
      this.orders = data;
    })
  }

}
