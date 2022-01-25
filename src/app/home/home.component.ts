import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit , DoCheck {

  email = "test";
  isSignedIn = false;

 

  constructor(private dataService : DataserviceService, private Route : Router) { }

  ngDoCheck(): void {
    this.email = this.dataService.email
    this.isSignedIn = this.dataService.isSignedIn
    console.log(`from home ${this.email}`)
  }


  ngOnInit(): void {
    window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    var loginROute = () => {
      if(!this.isSignedIn)
      this.Route.navigate(['/login'])
    }

    //set Timer and load to loginpage 
    setTimeout( loginROute  , 3000 )
    
// or
    // 1>firebase google
});
  }

}