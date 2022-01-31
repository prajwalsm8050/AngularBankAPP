import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoanComponent } from './loan/loan.component';
import { SicalcyComponent } from './sicalcy/sicalcy.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseService } from './services/firebase.service';
import { ProfileComponent } from './profile/profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserBankComponent } from './user-bank/user-bank.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    LoanComponent,
    SicalcyComponent,
    ProfileComponent,
    UserprofileComponent,
    NavbarComponent,
    AdminPanelComponent,
    UserBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBogJ5rQkuAkiYHyTscRA7PxpD5cBiVj_Q",
      authDomain: "bankdemo-f1152.firebaseapp.com",
      projectId: "bankdemo-f1152",
      storageBucket: "bankdemo-f1152.appspot.com",
      messagingSenderId: "51455445034",
      appId: "1:51455445034:web:faad96d65f752ca45cdb53",
      measurementId: "G-10HHSTCWQH"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
