import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { OrderDetails } from '../models/order-details.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

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
