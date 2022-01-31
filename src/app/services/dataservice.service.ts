import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  email:any="";
  isSignedIn = false

  ErrorCode = ""
  ErrorMessage = ""  

  loginData(email:any, isSignedIn:boolean){
    this.email = email
    this.isSignedIn = isSignedIn
    console.log(this.email)
  }
  
  ErrorHandle(ErrorCode:string , ErrorMessage:string ){
    this.ErrorCode = ErrorCode
    this.ErrorMessage = ErrorMessage
  }

}
