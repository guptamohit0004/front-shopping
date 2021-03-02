import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart : any
  totalCart:any
  constructor(){
      this.cart = [{
          id:1,
          name : "Shampoo",
          price: 100,
          image : "August 23",
          totalItems:10,
          itemQuantity:2
      },
      {
        id:2,
          name : "Soap",
          price: 200,
          image : "August 23",
          totalItems:10,
          itemQuantity:1
      },
      {
        id:3,
          name : "Hair Band",
          price: 300,
          image : "August 23",
          totalItems:10,
          itemQuantity:2
      },
    ]
  };
  ngOnInit(): void {
    this.cart
    this.totalCart
    this.updateResult()
  }
   addItem(product: any) {
     this.cart.forEach((item, index) => {
      if (item.id == product.id) {
        this.cart[index].itemQuantity++
      }
    });
    this.updateResult()
  }
   deleteItem(product: any) {
     this.cart.forEach((item, index) => {
      if (item.id == product.id) {
        if(this.cart[index].itemQuantity>=1)
        this.cart[index].itemQuantity--
      }
    });
    this.updateResult()
  }
  updateResult(){
    let totalItems=0;
    let totalPrice=0;
    this.cart.forEach((item,index)=>{
        totalItems=totalItems+item.itemQuantity;
        totalPrice=totalPrice+(item.itemQuantity*item.price)
    })
    this.totalCart={
      totalPrice:totalPrice,
      totalItems:totalItems
    }
  }
}
