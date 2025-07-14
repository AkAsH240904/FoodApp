import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { FoodService } from "../../services/food/food.service";
import { loadMeals, loadMealsSuccess } from "../actions/meals.action";

@Injectable()
export class MealEffects {
    constructor(private actions: Actions, private mealService: FoodService) {
        if (!this.mealService) {
          console.error("mealService is NOT injected properly!");
        } else {
          console.log("mealService is injected:", this.mealService);
        }
      }
      
  loadMeals$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadMeals),
      mergeMap(() =>
        this.mealService.getMealById('Canadian').pipe(
         
          map((response) => {
            console.log(response);
            return loadMealsSuccess({ payload: response.meals });})
        )
      )
    )
  );
}

