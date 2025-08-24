import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from 'src/app/user/models/order-details.model';
import { OrderService } from 'src/app/user/services/order/order.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService) { }
  orderDetails: OrderDetails | null = null;
  id: number = 0;
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.orderService.getOrderDetailsById(this.id).subscribe(data => {
      this.orderDetails = data;
    })
  }

  openProductDetail(id: number): void {
    this.router.navigate([`/products/${id}`]);
  }

  cancelOrder(id: number | undefined ) {
    if (id === undefined) {
      return;
    }
    this.orderService.cancelOrderById(id).subscribe(data => {
      if (data) {
        alert("succeded");
      }
      return data;
    })
  }

}
