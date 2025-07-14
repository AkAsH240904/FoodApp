import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from 'express';
import { map, Observable } from 'rxjs';
import { cart, food, Meal } from '../model/meal.model';
import { FoodService } from '../services/food/food.service';
import { addToCart, removeFromCart } from '../store/actions/meals.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  myBucket$?:Observable<cart[]>; 
  totalPrice$: Observable<number>;
  cartSize$: Observable<number>;
  cartItems = 0;
   constructor(private store:Store<{myCart:cart[]}>){
    this.myBucket$ = this.store.pipe(select("myCart")); 
    
    
    this.totalPrice$ = this.myBucket$.pipe(
      map(items => items.reduce((sum, item) => sum + item.price * item.quantity, 0))
    );

    this.cartSize$ = this.myBucket$.pipe(
      map(items => items.length)
    );
    this.cartSize$.subscribe(size => this.cartItems = size);

    
   }
   increment(item:cart){
       const payload = {
         idMeal:item.idMeal,
         strMealThumb:item.strMealThumb,
         strMeal:item.strMeal,
         price:item.price,
         quantity: 1
       }
       this.store.dispatch(addToCart({payload}));
   
   
     }
     decrement(item:cart){
       const payload = {
         idMeal:item.idMeal,
         strMealThumb:item.strMealThumb,
         strMeal:item.strMeal,
         price:item.price,
         quantity:1
       }
       this.store.dispatch(removeFromCart({payload}));
     }
     
    
}
