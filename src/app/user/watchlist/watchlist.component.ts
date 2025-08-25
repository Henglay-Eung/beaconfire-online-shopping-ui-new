import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { WatchlistService } from '../services/watchlist/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private watchlistService: WatchlistService) { }

  products: Product[] = []
  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'actions'];


  ngOnInit(): void {
    this.watchlistService.getAllProductsInWatchlist().subscribe(res => {
      this.products = res.data;
    })
  }

  removeProduct(id: number): void {
    this.watchlistService.removeProductFromWatchlist(id).subscribe(() => {
      this.products = this.products.filter(product => product.productId !== id);
    })
  }

}
