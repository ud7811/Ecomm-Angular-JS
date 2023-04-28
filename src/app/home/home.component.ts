import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productAdd } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProduct: undefined | productAdd[];
  trendingProduct: undefined | productAdd[];


  constructor(private product: ProductService){}
    ngOnInit():void{
      this.product.popularProduct().subscribe((data)=>{
        this.popularProduct = data;
        
      })
      this.product.trendingProduct().subscribe((data)=>{
        this.trendingProduct = data;
      })

    }

}
