import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
user:any={};
msgError:string;
  constructor(private formBuilder:FormBuilder,
    private usersService:UsersService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:[''],
      pwd:['']
    })
  }
login(){
  console.log('Here my user',this.user);
    this.usersService.login(this.user).subscribe(
      (data)=> {
        console.log('Here data from login', data);
        if (data.message == "2") {
          localStorage.setItem('userId', data.user.id );
          if (data.user.role =='admin') {
            this.router.navigate(['orders']);
          } else {
            this.router.navigate(['']);
          }
        } else {
          this.msgError = 'Please check your email/pwd';
        }
      }
    );

}
}
