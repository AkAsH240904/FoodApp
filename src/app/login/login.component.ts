import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string ='';
  password: string = '';
  registrationform!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder,private auth : AuthService) { }
  ngOnInit(): void {
    // this.registrationform = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null,Validators.required)
    // });
    this.createForm();
  }

  createForm(){
    this.registrationform = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.registrationform.value);
    this.user =  Object.assign(this.user, this.registrationform.value);
    localStorage.setItem('Users',JSON.stringify(this.user));

  }
  login(){
    if(this.email == ''){
      alert('please Enter email');
      return;
    }
    if(this.password == ''){
      alert('please Enter password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }
  register(){
    if(this.email == ''){
      alert('please Enter email');
      return;
    }
    if(this.password == ''){
      alert('please Enter password');
      return;
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
  }

}
