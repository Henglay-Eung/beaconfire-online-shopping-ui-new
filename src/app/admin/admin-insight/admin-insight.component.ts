import { Component, OnInit } from '@angular/core';
import { ProductProfit } from '../models/product-profit.model';
import { ProductSold } from '../models/product-sold.model';
import { AdminProductService } from '../services/admin-product.service';

@Component({
  selector: 'app-admin-insight',
  templateUrl: './admin-insight.component.html',
  styleUrls: ['./admin-insight.component.css']
})
export class AdminInsightComponent implements OnInit {

  constructor(private adminProductService: AdminProductService) { }
    productProfitList: ProductProfit[] = [];
    productProfitDisplayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'profit'];

    top3ProductList: ProductSold[] = [];
 
    productSoldList: ProductSold[] = [];
    productSaleDisplayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'saleCount'];


  ngOnInit(): void {
    this.adminProductService.getProductProfitList().subscribe(res => {
      this.productProfitList = res.data;
    })
    this.adminProductService.getTop3ProductList().subscribe(res => {
      this.top3ProductList = res.data;
    })
    this.adminProductService.getProductSoldList().subscribe(res => {
      this.productSoldList = res.data;
    })
  }

}
