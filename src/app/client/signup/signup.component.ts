import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
path:any;
msg:string;
  constructor(private fb:FormBuilder,
    private usersService:UsersService,
    private router:Router) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm=this.fb.group({
      fullName:['', [Validators.minLength(6),Validators.maxLength(20),Validators.required]],
      email:['', [Validators.required, Validators.email]],
      pwd:['', [Validators.minLength(8),Validators.maxLength(16),Validators.required,
      // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]]
      ,confirmPwd:[''],
      adresse:['', [Validators.maxLength(30),Validators.required]],
      tel:['', [Validators.maxLength(15),Validators.required]],
      region:[''],
      commune:[''],
      codePostal:['']
    },
    {
      validator: MustMatch('pwd','confirmPwd')
    }
    );


  }
  signup(obj:any) {
    console.log('object', obj);
    
    if (this.path == "/signup") {
      obj.role = 'user';
    } else {
      obj.role = 'admin';
    }
    this.usersService.signup(obj).subscribe(
      (data) => {
        if (data.message == '0') {
          this.msg  = "Email exists";
        } else {
          this.router.navigate(['']);
        }
        console.log('Data after ', data.message);
      }
    );
  }

}
