import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product/product.service';
import { WatchlistService } from '../services/watchlist/watchlist.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateShoppingCartItem } from '../models/shopping-cart-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private watchlistService: WatchlistService,
    private shoppingCartService: ShoppingCartService
  ) { }

  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', "quantity", 'actions'];
  products: Product[] = [];
  quantitiesForm: Map<number, FormControl<number | null>> = new Map();


  ngOnInit(): void {
    this.productService.getProductList().subscribe(res => {
      this.products = res.data;
      this.products.forEach((product) => this.quantitiesForm.set(product.productId, new FormControl(1, [Validators.required, Validators.min(1)])));
    })
  }

  addToShoppingCart(id: number) {
    const item = {
      productId: id,
      quantity: this.quantitiesForm.get(id)?.value ?? 1
    } as CreateShoppingCartItem
    this.shoppingCartService.addItemToShoppingCart(item).subscribe(res => {
      alert("Succesfully added to shopping cart");
    })
  }

  addToWatchlist(id: number) {
    this.watchlistService.addProductToWatchlist(id).subscribe(res => {
      alert("Succesfully added to watchlist");
    })
  }

  getQuantityControl(index: number): FormControl<number | null> {
    return this.quantitiesForm.get(index) as FormControl<number | null>;
  }
  
}
