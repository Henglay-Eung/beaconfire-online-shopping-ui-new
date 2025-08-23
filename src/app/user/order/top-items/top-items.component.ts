import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/user/models/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.css']
})
export class TopItemsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  topProductList: Product[] = [];
  displayedColumns: string[] = ['productId', 'name', 'description', 'retailPrice', 'wholesalePrice'];

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.topProductList = data;
    })
  }

}
