import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products : any
  constructor(){
      this.products = [{
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10
      },
      {
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10
      },
      {
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10
      },
    ]
  };
  ngOnInit(): void {
    this.products
  }
   addItem(product: any) {
     console.log(product)
  }
   deleteItem(product: any) {
     console.log(product)
  }
}
