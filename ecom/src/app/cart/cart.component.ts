import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   welcome : string;
  products : any
  constructor(){
      this.welcome = "Display List using ngFor in Angular 2"
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
      {
          name : "Shampoo",
          price: 123,
          image : "August 23",
          totalItems:10
      }
    ]
  };
  ngOnInit(): void {
    this.products
  }
}
