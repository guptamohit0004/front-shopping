import { Component, OnInit } from '@angular/core';
import { cartService } from '../service/cartService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private cartServiceData: cartService){
  }
  ngOnInit(): void {
    this.products=this.cartServiceData.products
  }
   addToCart(product: any) {
     console.log(product)
     this.cartServiceData.addToCart(product)
   }
}
