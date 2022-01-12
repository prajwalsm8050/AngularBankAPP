import { Component, OnInit } from '@angular/core';
import { OtpService } from '../otp.service';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private us: UserService, private otp:OtpService) { }

  usrs: Users = new Users();


  secretkey:any = 1234;
  
  ngOnInit(): void {
    this.otp.getOtp().subscribe((data) => {
      this.secretkey = data;
    })
  }

  register(obj: any){
    this.usrs.firstName = obj.fname;
    this.usrs.lastName = obj.lname;
    this.usrs.email = obj.email;
    this.usrs.password = obj.password

    if(this.usrs !== null){
      {
        this.us.saveUser(this.usrs).subscribe((res) => {
          console.log(res);
        })
      }
     
    }
    else{
      console.log('failed bruh');
    }
  }

}
