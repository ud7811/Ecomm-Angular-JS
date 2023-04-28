import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../services/product.service';
import { productAdd } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchProduct : undefined | productAdd[];
  constructor(private activerouter: ActivatedRoute, private product: ProductService){}
  ngOnInit(){
    let query = this.activerouter.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result)=> {
      if(query){
        this.searchProduct = result;
      }
      
    })

  }

}
