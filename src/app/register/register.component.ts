import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../user.service';
import { Users } from '../Users';
export {};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit  {
  isSignedIn = false

  constructor(private us: UserService, private otp:OtpService, public firebaseService : FirebaseService, public route: Router) { }

  // usrs: Users = new Users();


  secretkey:any = 1234;
  
  // ngOnInit(): void {
  //   this.otp.getOtp().subscribe((data) => {
  //     this.secretkey = data;
  //   })
  // }

  ngOnInit(){
    if(localStorage.getItem('user') != null )
    this.isSignedIn = true
    else
    this.isSignedIn = false

  }

  async register(email:string, password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    console.log(email, password)
    this.route.navigate(['/login'])
  }

  // register(obj: any){
  //   this.usrs.firstName = obj.fname;
  //   this.usrs.lastName = obj.lname;
  //   this.usrs.email = obj.email;
  //   this.usrs.password = obj.password

  //   if(this.usrs !== null){
  //     {
  //       this.us.saveUser(this.usrs).subscribe((res) => {
  //         console.log(res);
  //       })
  //     }
     
  //   }
  //   else{
  //     console.log('failed bruh');
  //   }
  // }



}
