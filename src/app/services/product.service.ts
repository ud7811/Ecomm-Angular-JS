import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { productAdd } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isProductAdded = new EventEmitter<boolean>(false);
 

  constructor(private http: HttpClient) { }
  addProduct(data:productAdd){
    this.http.post('http://localhost:3000/Products', data).subscribe((result)=>{
      console.warn("result:", result);
      if(result){
        this.isProductAdded.emit(true)
      }
      
    })    
  }
  productList(){
    return this.http.get<productAdd[]>('http://localhost:3000/Products')
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/Products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<productAdd>(`http://localhost:3000/Products/${id}`);
  }
  updateProduct(product: productAdd){
    return this.http.put<productAdd>(`http://localhost:3000/Products/${product.id}`, product);
  }
  popularProduct(){
    return this.http.get<productAdd[]>('http://localhost:3000/Products?limit=10')
  }
  trendingProduct(){
    return this.http.get<productAdd[]>('http://localhost:3000/Products?limit=8')
  }
  searchProduct(query: string){
    return this.http.get<productAdd[]>(`http://localhost:3000/Products?q=${query}`)
  }

}
