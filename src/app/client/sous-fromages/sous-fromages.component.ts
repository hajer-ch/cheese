import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-sous-fromages',
  templateUrl: './sous-fromages.component.html',
  styleUrls: ['./sous-fromages.component.css']
})
export class SousFromagesComponent implements OnInit {

  @Input() products: any;
  product: any;

  constructor(private router: Router,
    private produitsService: ProduitsService) { }

  ngOnInit() {
  }
  inc(products) {
    // console.log("this is product", products.qty)
    if (products.qty != 5) {
      products.qty += 1;
    }

  }
  dec(products) {
    // console.log("this is product", products.qty)
    if (products.qty != 1) {
      products.qty -= 1;
    }
  }
  itemsBasket: any;
  addBasket(items) {
    let basketDataNull = localStorage.getItem('localBasket');
    if (basketDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(items);
      localStorage.setItem('localBasket', JSON.stringify(storeDataGet));
    } else {
      var id = items.id;
      let index: number = -1;
      this.itemsBasket = JSON.parse(localStorage.getItem('localBasket'));
      for (let i = 0; i < this.itemsBasket.length; i++) {
        if (parseInt(id) === parseInt(this.itemsBasket[i].id)) {
          this.itemsBasket[i].qty = items.qty;
          index = i;
          break;
        }

      }
      if (index == -1) {
        this.itemsBasket.push(items);
        localStorage.setItem('localBasket', JSON.stringify(this.itemsBasket));
      } else {
        localStorage.setItem('localBasket', JSON.stringify(this.itemsBasket));
      }
    }
    this.basketNumberFun();
  }
  basketNumber:number=0;
  basketNumberFun(){
    var basketValue= JSON.parse(localStorage.getItem('localBasket'));
    this.basketNumber=basketValue.length;
    this.produitsService.basketSubject.next(this.basketNumber);
  }
}
