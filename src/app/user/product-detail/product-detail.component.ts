import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private productService: ProductService) { }
  id: number = 0;
  product: Product | undefined;
  ngOnInit(): void {
    this.id = Number(this.router.snapshot.params['id']);
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data
    });
  }

}
