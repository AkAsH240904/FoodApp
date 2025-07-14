import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { food, Meal } from '../model/meal.model';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/actions/meals.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
  }
  meal: any;
  meals$?:Observable<Meal[]>;
  constructor(private router : Router,private mealService : FoodService,private store: Store<{meal:Meal[]}>){
    this.store.select('meal').subscribe((state: any) => {
      console.log('Current meals:', state);
      this.meal = state;
    });
  }
  isSearchOpen: boolean = true; // State to track if the search bar is open
  searchValue: string = ''; // Two-way binding for the search input

  // Method to open the search bar
  openSearch(): void {
    this.isSearchOpen = true;
    console.log(this.searchValue);
  }

  onSearchChange(){
    
  }
  increment(item:food){
    const payload = {
      idMeal:item.idMeal,
      strMealThumb:item.strMealThumb,
      strMeal:item.strMeal,
      price:item.price,
      quantity: 1
    }
    this.store.dispatch(addToCart({payload}));


  }
  decrement(item:food){
    const payload = {
      idMeal:item.idMeal,
      strMealThumb:item.strMealThumb,
      strMeal:item.strMeal,
      price:item.price,
      quantity:1
    }
    this.store.dispatch(removeFromCart({payload}));
  }

  closeSearch(): void {
    this.isSearchOpen = false;
    this.searchValue = ''; // Clear the search input
  }
  GoToHome(){
    this.router.navigate(['/']);
  }
  fetchMeal(): void {
    this.mealService.getMealById('Canadian').subscribe(
      (data) => {
        this.meal = data.meals;
        console.log(this.meal);
      },
      (error) => {
        console.error('Error fetching meal data:', error);
      }
    );
  }
}
