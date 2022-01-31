import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL: string = "http://localhost:3303";


  constructor(private http: HttpClient) { }

  // saveUser(usrs: Users) : Observable<Users> {
  //   return this.http.post<Users>(`${this._URL}/bankapi/register`,usrs)
  // }

  // loginuser(usrs: Users) : Observable<Users> {
  //   this.http.get<Users>(`${this._URL}/bankapi/login`)
  //   return  this.http.post<Users>(`${this._URL}/bankapi/login`, usrs)
  // }


  saveUser(users: Users) {
    return this.http.post<Users>(`${this.baseURL}/bank/api/saveUser`, users)
  }


  getUser(email: string): Observable<Users> {
    return this.http.get<Users>(`${this.baseURL}/bank/api/getUser/:${email}`);
  }



  
}
