import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SicalcyComponent } from './sicalcy/sicalcy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'loan',component:LoanComponent},
  {path:'intrest',component:SicalcyComponent},
  {path:'profile', component : ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
