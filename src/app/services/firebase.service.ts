import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  errorCode = ""
  errorMessage = ""
  


  constructor(public firebaseAuth : AngularFireAuth, private dataservice : DataserviceService) { }

  async signin(email: string, password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(
      res => {
        console.log(email)
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      }
    )
    .catch((error) => {
     this.errorCode = error.code;
    this.errorMessage = error.message;
    this.dataservice.ErrorHandle(this.errorCode, this.errorMessage)
    })
  }

  async signup(email: string, password:string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      }
    )
  }


  logout()
  {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
