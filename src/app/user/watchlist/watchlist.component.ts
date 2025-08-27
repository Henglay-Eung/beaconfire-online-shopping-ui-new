import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { WatchlistService } from '../services/watchlist/watchlist.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove the product!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6', 
      cancelButtonColor: '#d33'    
    }).then(result => {
      if (result.isConfirmed) {
        this.watchlistService.removeProductFromWatchlist(id).subscribe(() => {
          this.products = this.products.filter(product => product.productId !== id);
        })
      }
    });


  }

}
