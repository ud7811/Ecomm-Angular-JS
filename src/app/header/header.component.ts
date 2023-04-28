import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productAdd } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: String = 'default';
  SellerName = '';
  searchResult: undefined | productAdd[];
  constructor(private route: Router, private product: ProductService) {}
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (localStorage.getItem('seller') && val.url.includes('seller')) {
        // console.warn('in seller area');
        this.menuType = 'seller';
        let storage = JSON.parse(localStorage.getItem('seller')!);
        this.SellerName = storage[0].name;
      } else {
        console.warn('outside seller area');
        this.menuType = 'default';
      }
    });
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['']);
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {
        // if(result.length>3){
        //   result.length=3;
        // }
        this.searchResult = result;
      });
    }
  }
  hideResult() {
    this.searchResult = undefined;
  }
  searchPage(val: string){
    this.route.navigate([`search/${val}`])
    
  }
}
