import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productAdd } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  productList: undefined | productAdd[];
  deleteMsg: undefined | string;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      this.productList = result;
    });
  }
  deleteItem(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMsg = 'Product Deleted Successfully';
        this.product.productList().subscribe((result) => {
          this.productList = result;
        });
      }
      setTimeout(() => {
        this.deleteMsg = undefined;
      }, 3000);
    });
  }
}
