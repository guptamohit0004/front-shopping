import { Component, OnInit } from '@angular/core';
import { cartService } from '../service/cartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart : any
  totalCart:any
  constructor(private cartServiceData: cartService){
  }
  ngOnInit(): void {
    this.cart=this.cartServiceData.cart
    this.totalCart=this.cartServiceData.totalCart
  }
   deleteItem(product: any) {
     this.cartServiceData.deleteItem(product)
    this.totalCart=this.cartServiceData.totalCart
   }
   addItem(product: any) {
     this.cartServiceData.addItem(product)
    this.totalCart=this.cartServiceData.totalCart
   }
}
