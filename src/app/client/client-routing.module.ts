import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BasketComponent } from './basket/basket.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { FromagesComponent } from './fromages/fromages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';





const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'basket', component: BasketComponent},
  { path: 'apropos', component: AboutUsComponent},
  { path: 'contactus', component: ContacUsComponent},
  { path: 'fromages', component: FromagesComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
