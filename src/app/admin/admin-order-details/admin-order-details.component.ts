import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { OrderService } from 'src/app/user/services/order/order.service';
import { AdminOrderService } from '../services/admin-order.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private adminOrderService: AdminOrderService) { }


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
    this.adminOrderService.getOrderDetailsById(this.id).subscribe(res => {
      this.orderDetails = res.data;
    })
  }

  openProductDetail(id: number): void {
    this.router.navigate([`/admin/products/${id}`]);
  }

  cancelOrder(id: number | undefined ) {
    if (id === undefined) {
      return;
    }
    this.adminOrderService.cancelOrderById(id).subscribe(() => {
      alert("succeded");
    }, error => {
      alert(error.error)
    })
  }

}
