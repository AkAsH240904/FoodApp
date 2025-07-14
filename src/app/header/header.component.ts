import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private router: Router,private dialog: MatDialog){}
  GoToHome(){
    this.router.navigate(['/home']);
  }
  GoToLogin(){
    this.router.navigate(['/login']);
  }
  GoToCart(){
    this.router.navigate(['/cart']);
  }

  openDialog() {
    this.dialog.open(LoginComponent, {
      position: {
        top: '80px', // Adjust this value based on your header height
        right: '20px'
      },
      backdropClass: 'dialog-backdrop', // Optional for custom styling
      panelClass: 'custom-dialog-container' // Optional for custom styling
    });
  }
}
