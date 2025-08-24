import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/user/models/product.model';
import { ProductService } from 'src/app/user/services/product/product.service';
import { ProductSold } from '../models/product-sold.model';
import { AdminProductService } from '../services/admin-product.service';
import { ProductProfit } from '../models/product-profit.model';

@Component({
  selector: 'app-admin-top-items',
  templateUrl: './admin-top-items.component.html',
  styleUrls: ['./admin-top-items.component.css']
})
export class AdminTopItemsComponent implements OnInit {

  constructor(private adminProductService: AdminProductService) { }
    productProfitList: ProductProfit[] = [];
    productProfitDisplayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'profit'];


    top3ProductList: ProductSold[] = [];
    // top3ProductDisplayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice'];


    productSoldList: ProductSold[] = [];
    productSaleDisplayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'saleCount'];


  ngOnInit(): void {
    this.adminProductService.getProductProfitList().subscribe(data => {
      this.productProfitList = data;
    })
    this.adminProductService.getTop3ProductList().subscribe(data => {
      this.top3ProductList = data;
    })
    this.adminProductService.getProductSoldList().subscribe(data => {
      this.productSoldList = data;
    })
  }

}
