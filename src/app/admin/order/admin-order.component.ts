import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/user/models/order.model';
import { OrderService } from 'src/app/user/services/order/order.service';
import { ProductService } from 'src/app/user/services/product/product.service';
import { AdminProductService } from '../services/admin-product.service';
import { AdminOrderService } from '../services/admin-order.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent implements OnInit {
  constructor(private adminOrderService: AdminOrderService) {}

  displayedColumns: string[] = [
    'orderId',
    'datePlaced',
    'orderStatus',
    'actions',
  ];
  orders: Order[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  totalItems: number = 1;
  totalPages: number = 1;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.adminOrderService
      .getOrderList(this.currentPage, this.pageSize)
      .subscribe((res) => {
        this.orders = res.data;
        this.currentPage = res.currentPage;
        this.pageSize = res.pageSize;
        this.totalItems = res.totalItems;
        this.totalPages = res.totalPages;
      });
  }

  completeOrder(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, complete the order!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminOrderService.completeOrderById(id).subscribe(() => {
          this.orders = this.orders.map((order) => {
            if (order.orderId === id) {
              order.orderStatus = 'Completed';
            }
            return order;
          });
        });
      }
    });
  }

  cancelOrder(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel the order!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminOrderService.cancelOrderById(id).subscribe((res) => {
          this.orders = this.orders.map((order) => {
            if (order.orderId === id) {
              order.orderStatus = 'Canceled';
            }
            return order;
          });
        });
      }
    });
  }
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex; // paginator is 0-based
    this.pageSize = event.pageSize;
    this.loadData(); // call backend again with new params
  }
}
