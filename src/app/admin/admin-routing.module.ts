import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCheeseComponent } from './add-cheese/add-cheese.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'add-cheese', component: AddCheeseComponent },
  { path: 'add-cheese/:id', component: AddCheeseComponent},
  { path: 'home', component: HomeComponent ,
  data: {
    breadcrumb: 'Home',
    status: true
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
