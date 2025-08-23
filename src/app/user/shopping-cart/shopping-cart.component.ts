import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  
  products: Product[] = [{
    productId: 1,
    name: "Juice",
    description: "Natural",
    retailPrice: 5,
    wholesalePrice: 6
  }];
  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'actions'];


  ngOnInit(): void {
  }

}
