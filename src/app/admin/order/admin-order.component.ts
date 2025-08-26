import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/user/models/order.model';
import { OrderService } from 'src/app/user/services/order/order.service';
import { ProductService } from 'src/app/user/services/product/product.service';
import { AdminProductService } from '../services/admin-product.service';
import { AdminOrderService } from '../services/admin-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  constructor(private adminOrderService: AdminOrderService) { }

  displayedColumns: string[] = ['orderId', 'datePlaced', 'orderStatus', 'actions'];
  orders: Order[] = [];

  ngOnInit(): void {
    this.adminOrderService.getOrderList().subscribe(res => {
      this.orders = res.data;
    })
  }

  completeOrder(id: number) {
    this.adminOrderService.completeOrderById(id).subscribe(res => {
      alert("Order Completed");
      this.orders = this.orders.map(order =>
        order.orderId === id ? { ...order, orderStatus: "Completed" } : order
      );
    })
  }
  
  cancelOrder(id: number) {
    this.adminOrderService.cancelOrderById(id).subscribe(res => {
      alert("Order Canceled");
      this.orders = this.orders.map(order =>
        order.orderId === id ? { ...order, orderStatus: "Canceled" } : order
      );
    })
  }
}
