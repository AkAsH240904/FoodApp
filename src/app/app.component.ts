import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { Store } from '@ngrx/store';
import { Meal } from './model/meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'social';
  registrationform!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder,private dialog: MatDialog,private store: Store<{meal:Meal[]}>) {
    this.store.select('meal').subscribe((state: any) => {
      console.log('Current meals:', state);
    });
   }
  ngOnInit(): void {
    // this.registrationform = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null,Validators.required)
    // });
    this.createForm();

  }
  opendialog(){
    this.dialog.open(LoginComponent);
  }

  createForm(){
    this.registrationform = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }

  onSubmit() {
    console.log(this.registrationform.value);
    this.user = Object.assign({}, this.registrationform.value);
    this.addUser(this.user);
  }
  
  addUser(user: any) {
    let users: any[] = [];
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
      if (!Array.isArray(users)) {
        users = [];
      }
    }
    users = [user, ...users];
    localStorage.setItem('Users', JSON.stringify(users));
    console.log(users);
  }
  
  
}
