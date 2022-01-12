import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicalcy',
  templateUrl: './sicalcy.component.html',
  styleUrls: ['./sicalcy.component.css']
})
export class SicalcyComponent implements OnInit {

  principal:number = 1000;
  time:number = 1;
  rate:number = 10;
  si:number = 0;
  amt:number = 0;

  totalIntrest:number = 0;
  payment:number = 0;
  totalPay:number = 0;



  Calculate(p:number,t:number,r:number){
    this.totalIntrest = (p*t*r/100);
    this.payment = ((this.totalIntrest + p) / (t*12));
    this.payment.toFixed(2);
    this.totalPay = (this.totalIntrest + p);
    this.totalPay.toFixed(2);


  }
   

  constructor() { }



  ngOnInit(): void {
  }

}
