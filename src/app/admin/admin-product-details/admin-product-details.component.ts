import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../services/admin-product.service';
import { Product } from 'src/app/user/models/product.model';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private adminProductService: AdminProductService) { }
  id: number = 0;
  product: Product | undefined;
  ngOnInit(): void {
    this.id = Number(this.router.snapshot.params['id']);
    this.adminProductService.getProductById(this.id).subscribe(data => {
      this.product = data
    });
  }
}
