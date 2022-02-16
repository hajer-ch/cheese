import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private produitsService:ProduitsService) {
    this.produitsService.basketSubject.subscribe((data)=>{
      this.basketItem=data;
    }
      )
   }

  ngOnInit() {
    this.basketItemfunc();
  }

  basketItem: number = 0;
  basketItemfunc() {
    if (localStorage.getItem('localBasket') != null) {
      var basketCount = JSON.parse(localStorage.getItem('localBasket'));
      this.basketItem = basketCount.length;
    }

  }
}
