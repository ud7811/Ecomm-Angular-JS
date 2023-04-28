import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService) {}

  showLogin = false;
  AuthError: String = '';

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
  }
  logIn(data: Login): void {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.AuthError = 'Email Id or Password is incorrect';
      }
    })
    
  }
  openLogin() {
    this.showLogin = false;
  }
  openSignUp() {
    this.showLogin = true;
  }
}
