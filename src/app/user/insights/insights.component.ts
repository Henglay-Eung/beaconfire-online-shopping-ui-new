import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  top3MostRecentProductList: Product[] = [];
  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice'];
  top3MostFrequentProductList: Product[] = [];

  ngOnInit(): void {
    this.productService.getTop3MostFrequentlyPurchasedProducts().subscribe(res => {
      this.top3MostFrequentProductList = res.data;
    });
    this.productService.getTop3MostRecentlyPurchasedProducts().subscribe(res => {
      this.top3MostRecentProductList = res.data;
    })
  }

}
