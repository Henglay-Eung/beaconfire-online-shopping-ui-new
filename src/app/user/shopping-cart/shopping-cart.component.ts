import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { OrderService } from '../services/order/order.service';
import { CreateOrder } from '../models/order.model';
import { CreateOrderItem } from '../models/order-details.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) {}

  shoppingCart: ShoppingCart = {
    shoppingCartItems: [],
  };
  displayedColumns: string[] = [
    'id',
    'productId',
    'name',
    'description',
    'retailPrice',
    'wholesalePrice',
    'quantity',
    'actions',
  ];

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe((res) => {
      this.shoppingCart = res.data;
    });
  }

  removeAnItem(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove the item!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.shoppingCartService
          .removeItemFromShoppingCard(id)
          .subscribe(() => {
            this.shoppingCart.shoppingCartItems =
              this.shoppingCart.shoppingCartItems.filter(
                (item) => item.id !== id
              );
          });
      }
    });
  }

  placeAnOrder() {
    const createOrder: CreateOrder = {
      orderItems: this.shoppingCart.shoppingCartItems.map((item) => {
        return {
          productId: item.productId,
          quantity: item.quantity,
        };
      }),
    };
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, place the order!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.placeAnOrder(createOrder).subscribe(
          (res) => {
            this.shoppingCart.shoppingCartItems = []
            Swal.fire({
              title: 'Successfully!',
              text: res.message,
              icon: 'success',
              confirmButtonColor: 'green',
            });
          },
          (e) => {
            Swal.fire({
              title: 'Error!',
              text: e.error.error,
              icon: 'error',
              confirmButtonColor: 'red',
            });
          }
        );
      }
    });
  }
}
