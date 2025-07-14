import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{ path:'home', component: HomeComponent,canActivate: [AuthGuardGuard]},{path:'', component: LoginComponent},{path:'cart', component: CartComponent,canActivate: [AuthGuardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
