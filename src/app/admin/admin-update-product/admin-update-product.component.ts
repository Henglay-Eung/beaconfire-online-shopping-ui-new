import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminProductService } from '../services/admin-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProduct, UpdateProduct } from 'src/app/user/models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private adminProductService: AdminProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  productForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
    retailPrice: [0],
    wholesalePrice: [0],
    quantity: [0]
  })
  id = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.adminProductService.getProductById(this.id).subscribe(res => {
      const data = res.data;
      console.log(res.data)
      this.productForm = this.fb.group({
        name: new FormControl(data.name, Validators.required),
        description: new FormControl(data.description, Validators.required),
        retailPrice: new FormControl(data.retailPrice, [Validators.required, Validators.min(0)]),
        wholesalePrice: new FormControl(data.wholesalePrice, [Validators.required, Validators.min(0)]),
        quantity: new FormControl(data.quantity, [Validators.required, Validators.min(0)])
      });
    })
  }

  update(): void {
    Swal.fire({
          title: 'Are you sure?',
          text: 'You won’t be able to revert this',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, update the product!',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
             const updatedProduct = this.productForm.value as UpdateProduct;
            this.adminProductService.updateProduct(this.id, updatedProduct).subscribe(() => {
              this.router.navigate(['/admin/products']);
            })
          }
        });
   
  }

}
