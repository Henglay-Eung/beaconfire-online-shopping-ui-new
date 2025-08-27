import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { Order } from '../models/order.model';
import Swal from 'sweetalert2';

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
    this.orderService.getOrderList().subscribe(res => {
      this.orders = res.data;
    })
  }

  cancelOrder(id: number | undefined ) {
    if (id === undefined) {
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel the order!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6', 
      cancelButtonColor: '#d33'    
    }).then(result => {
      if (result.isConfirmed) {
        this.orderService.cancelOrderById(id).subscribe(() => {
          this.orders = this.orders.map(order => {
            if (order.orderId === id) {
              order.orderStatus = "Canceled";
            }
            return order;
          });
        });
      }
    });

  }

}
