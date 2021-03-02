import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart : any
  constructor(){
      this.cart = [{
        id:1,
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10,
          itemQuantity:1
      },
      {
        id:2,
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10,
          itemQuantity:1
      },
      {
        id:3,
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10,
          itemQuantity:1
      },
    ]
  };
  ngOnInit(): void {
    this.cart
  }
   addItem(product: any) {
     this.cart.forEach((item, index) => {
      if (item.id == product.id) {
        this.cart[index].itemQuantity++
      }
    });
  }
   deleteItem(product: any) {
     this.cart.forEach((item, index) => {
      if (item.id == product.id) {
        if(this.cart[index].itemQuantity>=1)
        this.cart[index].itemQuantity--
      }
    });
  }
}
