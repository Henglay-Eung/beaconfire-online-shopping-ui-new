import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../services/admin-product.service';
import { Product } from 'src/app/user/models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private adminProductService: AdminProductService) { }

  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice', 'actions'];
  products: Product[] = []

  ngOnInit(): void {
    this.adminProductService.getProductList().subscribe(data => {
      this.products = data;
    })
  }

}
