import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { AfterHeaderComponent } from './after-header/after-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FromagesComponent } from './fromages/fromages.component';
import { RecettesComponent } from './recettes/recettes.component';
import { VideoComponent } from './video/video.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SousFromagesComponent } from './sous-fromages/sous-fromages.component';
import { SousRecetteComponent } from './sous-recette/sous-recette.component';
import { RouterModule } from '@angular/router';









@NgModule({
  declarations: [ HomeComponent, AfterHeaderComponent, CarouselComponent, FromagesComponent, RecettesComponent, VideoComponent, AboutUsComponent, ContacUsComponent, BasketComponent, LoginComponent, SignupComponent, SousFromagesComponent, SousRecetteComponent,],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  
    
 
  
   
   
    
 
  ]
})
export class ClientModule { }
