import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class cartService {
  totalCart:any
  products:any =[{
          id:1,
          name : "Shampoo",
          price: 100,
          image : "August 23",
          totalItems:10
      },
      {
        id:2,
          name : "Soap",
          price: 200,
          image : "August 23",
          totalItems:10
      },
      {
        id:3,
          name : "Hair Band",
          price: 300,
          image : "August 23",
          totalItems:10
      },
    ]
  cart:any =[
    ]
  constructor() {}
  addToCart(product:any){
    for (let x in this.cart) {
        if (this.cart.hasOwnProperty(x) && this.cart[x].id === product.id) {
            alert("Item ALready Present in Cart!!!")
            return;
        }
    }
    this.cart.push({...product,itemQuantity:1})
    this.updateResult()
  }
     addItem(product: any) {
     this.cart.forEach((item, index) => {
      if (item.id == product.id) {
        if(this.cart[index].itemQuantity < item.totalItems)
         this.cart[index].itemQuantity++
        else
         alert(`No More ${product.name} Available`);
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
