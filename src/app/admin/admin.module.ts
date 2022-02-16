import { NgModule } from '@angular/core';


import { AdminRoutingModule } from './admin-routing.module';
import { AddCheeseComponent } from './add-cheese/add-cheese.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from '../shared/notifications/notifications/notifications.module';


@NgModule({
  declarations: [ AddCheeseComponent, HomeComponent,],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NotificationsModule
  ]
})
export class AdminModule { }
