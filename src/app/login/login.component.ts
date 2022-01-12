import { Component, OnInit } from '@angular/core';
import { OtpService } from '../otp.service';
import { UserService } from '../user.service';
import { Users } from '../Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private uservice: UserService, private otp:OtpService) {

   }

   usrs: Users = new Users();
   secretkey:any=1234

   loginStatus:boolean = false;

  ngOnInit(): void {
    this.otp.getOtp().subscribe((data)=> {
      this.secretkey = data;
    })
  }

  loginuser(obj: any) {
    this.usrs.firstName = obj.username
    this.usrs.password = obj.password
    if(this.usrs !== null)
    {
      this.uservice.loginuser(this.usrs).subscribe((data) => {
        console.log(data)
         this.loginStatus = true;
        console.log(this.loginStatus)
       })
    }

    else{
      console.log("Wrong password or Username")
      alert("Incorrect Username or Password")
    }
  }
}
