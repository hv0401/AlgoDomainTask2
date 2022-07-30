import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-product-card-component',
  templateUrl: './product-card-component.component.html',
  styleUrls: ['./product-card-component.component.css']
})
export class ProductCardComponentComponent implements OnInit {
  


  CokeCount:number=0;
  AppleCount:number=0;
  SoapCount:number=0;
  AtaCount:number=0;
  TomCount:number=0;

  CokePrice:number= 34*this.CokeCount;
  ApplePrice:number = 50*this.AppleCount;
  SoapPrice:number = 46*this.SoapCount;
  AtaPrice:number = 390*this.AtaCount;
  TomPrice:number = 30*this.TomCount;
  GrandTotal:number= 0;

  constructor(private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
  }
  clickMe(){
    this.sharedDataService.sendClickEvent();
    }

    incCoke(){
      this.CokePrice=this.CokePrice+34;
      this.CokeCount=this.CokeCount+1;
      this.CalGrandTotal();
      
    }
    decCoke(){
      if(this.CokeCount>=1){
        this.CokePrice=this.CokePrice-34;
        this.CokeCount=this.CokeCount-1;
        this.CalGrandTotal();
      }  
    }

    incApple(){
      this.ApplePrice=this.ApplePrice+50;
      this.AppleCount=this.AppleCount+1;
      this.CalGrandTotal();
      
    }
    decApple(){
      if(this.AppleCount>=1){
        this.ApplePrice=this.ApplePrice-50;
        this.AppleCount=this.AppleCount-1;
        this.CalGrandTotal();
      }  
    }

    incSoap(){
      this.SoapPrice=this.SoapPrice+46;
      this.SoapCount=this.SoapCount+1;
      this.CalGrandTotal();
      
    }
    decSoap(){
      if(this.SoapCount>=1){
        this.SoapPrice=this.SoapPrice-46;
        this.SoapCount=this.SoapCount-1;
        this.CalGrandTotal();
      }  
    }

    incAta(){
      this.AtaPrice=this.AtaPrice+390;
      this.AtaCount=this.AtaCount+1;
      this.CalGrandTotal();
      
    }
    decAta(){
      if(this.AtaCount>=1){
        this.AtaPrice=this.AtaPrice-390;
        this.AtaCount=this.AtaCount-1;
        this.CalGrandTotal();
      }  
    }

    incTom(){
      this.TomPrice=this.TomPrice+30;
      this.TomCount=this.TomCount+1;
      this.CalGrandTotal();
      
    }
    decTom(){
      if(this.TomCount>=1){
        this.TomPrice=this.TomPrice-30;
        this.TomCount=this.TomCount-1;
        this.CalGrandTotal();
      }  
    }

    CalGrandTotal(){

      this.GrandTotal=0;
      this.GrandTotal=34*this.CokeCount + 50*this.AppleCount + 46*this.SoapCount +390*this.AtaCount
                      + 30*this.TomCount;
    }
}
