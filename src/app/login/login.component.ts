import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';
import { DataserviceService } from '../services/dataservice.service';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../user.service';
import { Users } from '../Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorCode: string = ""
  errorMessage: string = "" 

  constructor(private uservice: UserService, private otp:OtpService, public fireService : FirebaseService, private route : Router, private dataService : DataserviceService) {

   }

   usrs : Users = new Users();
  //  secretkey:any=1234
   
   isSignedIn = false;

  ngOnInit(): void {
    this.otp.getOtp().subscribe((data)=> {
      
    })
  }

  async loginuser(email:string, password:string)
  {
    await this.fireService.signin(email,password)
    if(this.fireService.isLoggedIn)
    {
    this.isSignedIn = true
    this.route.navigate(['/'])
    this.dataService.loginData(email, this.isSignedIn)
    }
    else{
      this.errorCode = this.dataService.ErrorCode
      this.errorMessage = this.dataService.ErrorMessage
    }
  }

  // loginuser(obj: any) {
  //   this.usrs.firstName = obj.username
  //   this.usrs.password = obj.password
  //   if(this.usrs !== null)
  //   {
  //     this.uservice.loginuser(this.usrs).subscribe((data) => {
  //       console.log(data)
  //        this.loginStatus = true;
  //       console.log(this.loginStatus)
  //      })
  //   }

  //   else{
  //     console.log("Wrong password or Username")
  //     alert("Incorrect Username or Password")
  //   }
  // }

}
