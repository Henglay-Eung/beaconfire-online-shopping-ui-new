import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { OrderDetails } from '../models/order-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  displayedColumns: string[] = ['itemId', 'productId', 'retailPrice', 'wholesalePrice', "quantity", 'actions'];

  orderDetails!: OrderDetails;
  id: number = 0;
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.orderService.getOrderDetailsById(this.id).subscribe(res => {
      this.orderDetails = res.data;
      console.log(this.orderDetails.orderStatus)
    })
  }


  cancelOrder(id: number | undefined ) {
    if (id === undefined) {
      return;
    }
    this.orderService.cancelOrderById(id).subscribe(() => {
        alert("succeded");
    })
  }
}
