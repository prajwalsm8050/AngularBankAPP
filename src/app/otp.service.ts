import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OTP } from 'src/OTP';


@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private Base_URL: string = "http://localhost:3303";

  constructor(private http: HttpClient) { }

  getOtp(): Observable<OTP> {
    return this.http.get<OTP>(`${this.Base_URL}/bankapi/getOtp`);

  }
}
