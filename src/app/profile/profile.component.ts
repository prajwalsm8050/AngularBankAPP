import { Component, DoCheck, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit , DoCheck{


  constructor(private dataservice : DataserviceService, private userservice : UserService ) { }

  users: Users = new Users();

  ngDoCheck(): void {
    // this.email = this.dataservice.email
    // console.log(this.email)
    
  }

  profileImg = "./assets/img/default.png"
  height:number = 100;
  width:number = 150;

  firstname:string = "Prajwal"
  lastname:string = "Shivapurmath"
  adhar:number = 455558855612
  dob:String = "14-02-2020"

  accountno:number=45201415522
  type:string="Current account"
  branch:string="bangalore"

  disabled = false
  email:string = "virat@gmail.com"
  edit = ()=> this.disabled = true
  

  saveUser(obj:any) {
    this.users.firstname = obj.firstname
    this.users.lastname = obj.lastname
    this.users.email = obj.email
    this.users.adhar = obj.adhar
    this.users.dob = obj.dob

    // this.firstname = obj.firstname
    // this.lastname = obj.lastname
    // this.email = obj.email
    // this.adhar = obj.adhar
    // this.dob = obj.dob

    if(this.users != null){
      console.log("OK OK OK")
      console.log(this.users)
      this.userservice.saveUser(this.users).subscribe((data) => {
        console.log(data)
      })
    }
  }

  ngOnInit(): void {
    this.userservice.getUser(this.email).subscribe((data) => {
      

    })

  }


}
