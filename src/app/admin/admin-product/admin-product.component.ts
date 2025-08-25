import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../services/admin-product.service';
import { AdminProduct, Product } from 'src/app/user/models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private adminProductService: AdminProductService) { }

  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'quantity', 'actions'];
  products: AdminProduct[] = []

  ngOnInit(): void {
    this.adminProductService.getProductList().subscribe(res => {
      this.products = res.data;
    })
  }

}
