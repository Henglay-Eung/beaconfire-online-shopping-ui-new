import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { OrderDetails } from '../models/order-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  displayedColumns: string[] = [
    'itemId',
    'productId',
    'purchasedPrice',
    'wholesalePrice',
    'quantity',
    'actions',
  ];

  orderDetails!: OrderDetails;
  id: number = 0;
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.orderService.getOrderDetailsById(this.id).subscribe((res) => {
      this.orderDetails = res.data;
    });
  }

  cancelOrder(id: number | undefined) {
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
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.cancelOrderById(id).subscribe(() => {
          this.orderDetails.orderStatus = 'Canceled';
        });
      }
    });
  }
}
