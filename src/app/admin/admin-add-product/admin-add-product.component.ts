import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    retailPrice: new FormControl('', [Validators.required, Validators.min(0)]),
    wholesalePrice: new FormControl('', [Validators.required, Validators.min(0)]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)])
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
