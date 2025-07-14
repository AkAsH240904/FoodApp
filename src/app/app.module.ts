import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,ROUTES,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment'
import { CommonModule } from '@angular/common';
import {MatDialogModule } from '@angular/material/dialog';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FoodService } from './services/food/food.service';
import { mealReducer } from './store/reducer/meal.reducer';
import {cartReducer} from './store/reducer/cart.reducer';
import { CartComponent } from './cart/cart.component';
const routes: Routes=[
  {path: 'login',component:LoginComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    StoreModule.forRoot({meal : mealReducer,myCart: cartReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false
    }),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

