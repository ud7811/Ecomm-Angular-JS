import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productAdd } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  productData: undefined | productAdd;
  productMsg: undefined | string;
  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
   
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
      });
    console.warn(productId);
  }

  updateSubmit(data: productAdd) {
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMsg = 'Product Updated Successfully';
      }
      setTimeout(() => {
        this.productMsg = undefined;
        this.router.navigate(['/seller-home']);
      }, 3000);
    });
  }
}
