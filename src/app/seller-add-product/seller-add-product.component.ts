import { Component } from '@angular/core';
import { productAdd } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg: string|undefined;
  constructor(private product: ProductService){}

  productSubmit(data:productAdd){
    this.product.addProduct(data);
    this.product.isProductAdded.subscribe((msg)=>{
      if(msg){
        this.addProductMsg = "Product added successfully";
      }
      setTimeout(()=>this.addProductMsg=undefined,3000)
    })
    

  }

}
