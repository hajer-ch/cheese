import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fromages',
  templateUrl: './fromages.component.html',
  styleUrls: ['./fromages.component.css']
})
export class FromagesComponent implements OnInit {
  products:any;
  constructor() { }

  ngOnInit() {
    this.products=[
      {id:1, title:"Burger", description:"Was brean shed moveth day yielding tree yielding day were femalqty", qty:2, prix:"40.00", sousPrix:""},
      {id:2, title:"Cremy Noodles", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:3, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:4, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:5, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:6, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:7, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:8, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},
      {id:9, title:"Honey Meat", description:"Was brean shed moveth day yielding tree yielding day were female and",qty:2, prix:"40.00",sousPrix:""},

    ];
  }

}
