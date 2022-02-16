
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';
import { InteractionsService } from 'src/app/services/interactions.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private produitsService: ProduitsService,
    private interactionsService: InteractionsService,
    private router: Router) {

  }

  ngOnInit() {
    this.basketDetails();
    this.loadBasket();

  }
 
  notification: any;
  sousPrix: any;

  getBasketDetails: any = [];
  basketDetails() {
    if (localStorage.getItem('localBasket')) {
      this.getBasketDetails = JSON.parse(localStorage.getItem('localBasket'));
    }
  }
  incQty(id, qty) {
    for (let i = 0; i < this.getBasketDetails.length; i++) {
      if (this.getBasketDetails[i].id === id) {
        if (qty != 5) {
          this.getBasketDetails[i].qty = parseInt(qty) + 1;
        }
      }
    }
    localStorage.setItem('localBasket', JSON.stringify(this.getBasketDetails));
    this.loadBasket();
  }
  decQty(id, qty) {
    for (let i = 0; i < this.getBasketDetails.length; i++) {
      if (this.getBasketDetails[i].id === id) {
        if (qty != 1) {
          this.getBasketDetails[i].qty = parseInt(qty) - 1;
        }

      }

    }
    localStorage.setItem('localBasket', JSON.stringify(this.getBasketDetails));
    this.loadBasket();
  }
  total: number = 0;
  loadBasket() {
    if (localStorage.getItem('localBasket')) {
      this.getBasketDetails = JSON.parse(localStorage.getItem('localBasket'));
      this.total = this.getBasketDetails.reduce(function (acc, val) {
        return acc + (val.prix * val.qty);
      }, 0);
    }

  }
  removeItems() {
    localStorage.removeItem('localBasket');
    this.getBasketDetails = [];
    this.total = 0;
    this.basketNumber = 0;
    this.produitsService.basketSubject.next(this.basketNumber);
  }

  removeItem(x) {
    if (localStorage.getItem('localBasket')) {
      this.getBasketDetails = JSON.parse(localStorage.getItem('localBasket'));
      for (let i = 0; i < this.getBasketDetails.length; i++) {

        if (this.getBasketDetails[i].id == x) {
          this.getBasketDetails.splice(i, 1);
          localStorage.setItem('localBasket', JSON.stringify(this.getBasketDetails));
          this.loadBasket();
          this.basketNumberFun();
          this.interactionsService.sendClickEvent();
        }
      }

    }

  }
  basketNumber: number = 0;
  basketNumberFun() {
    var basketValue = JSON.parse(localStorage.getItem('localBasket'));
    this.basketNumber = basketValue.length;
    this.produitsService.basketSubject.next(this.basketNumber);
  }
  retour() {
    this.router.navigate(['/fromages']);
  }
}
