import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { OrderService } from 'src/app/user/services/order/order.service';
import { AdminOrderService } from '../services/admin-order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css'],
})
export class AdminOrderDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminOrderService: AdminOrderService
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
    this.adminOrderService.getOrderDetailsById(this.id).subscribe((res) => {
      this.orderDetails = res.data;
    });
  }

  openProductDetail(id: number): void {
    this.router.navigate([`/admin/products/${id}`]);
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
        this.adminOrderService.cancelOrderById(id).subscribe(() => {
          this.orderDetails.orderStatus = 'Canceled';
        });
      }
    });
  }
}
