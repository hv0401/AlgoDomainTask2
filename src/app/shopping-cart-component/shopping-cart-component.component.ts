import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-shopping-cart-component',
  templateUrl: './shopping-cart-component.component.html',
  styleUrls: ['./shopping-cart-component.component.css']
})
export class ShoppingCartComponentComponent implements OnInit {
  clickEventsubscription:Subscription;
  constructor(private sharedDataService:SharedDataService) { 
    this.clickEventsubscription = this.sharedDataService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }

  ngOnInit(): void {
  }

  count:number = 34;
  incrementCount(){
    this.count=this.count+34;
    }
}
