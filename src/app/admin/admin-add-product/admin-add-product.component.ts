import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminProductService } from '../services/admin-product.service';
import { CreateProduct, Product } from 'src/app/user/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private adminProductService: AdminProductService, 
    private router: Router
  ) { }

  productForm: FormGroup = this.fb.group({
    name: new FormControl(),
    description: new FormControl(),
    retailPrice: new FormControl(),
    wholesalePrice: new FormControl(),
    quantity: new FormControl()
  });


  ngOnInit(): void {

  }

  add(): void {
    const product = this.productForm.value as CreateProduct;
    this.adminProductService.addNewProduct(product).subscribe(() => {
      this.router.navigate(['/admin/products']);
    })
  }

}
