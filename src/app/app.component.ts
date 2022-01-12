import { Component, OnInit } from '@angular/core';
import { OtpService } from './otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bank';

  constructor(private otp:OtpService) { }

  secretkey:any = 1234;
  ngOnInit(): void {
      this.otp.getOtp().subscribe((data) => {
        this.secretkey = data;
        console.log(data);
      })
  }




}
