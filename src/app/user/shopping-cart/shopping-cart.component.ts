import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { OrderService } from '../services/order/order.service';
import { CreateOrder } from '../models/order.model';
import { CreateOrderItem } from '../models/order-details.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) { }
  
  shoppingCart: ShoppingCart = {
    shoppingCartItems: []
  }
  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'quantity', 'actions'];



  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe(res => {
      this.shoppingCart = res.data;
    })
  }

  removeAnItem(id: number) {
      this.shoppingCartService.removeItemFromShoppingCard(id).subscribe(() => {
        this.shoppingCart.shoppingCartItems = this.shoppingCart.shoppingCartItems.filter(item => item.productId !== id);
        alert("Removed item successfully");
      })
  }

  placeAnOrder() {
    const createOrder: CreateOrder = {
      orderItems: this.shoppingCart.shoppingCartItems.map(item => {
        return {
          productId: item.productId,
          quantity: item.quantity
        }
      })
    }
    this.orderService.placeAnOrder(createOrder).subscribe(res => {
      alert("OK");
    })
  }

}
