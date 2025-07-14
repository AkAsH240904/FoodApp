import { createAction, props } from '@ngrx/store';
import { cart, Meal } from '../../model/meal.model';

export const loadMeals = createAction('[Meal] Load Meals');
export const loadMealsSuccess = createAction(
  '[Meal] Load Meals Success',
  props<{ payload: Meal}>()
);
export const loadMealsFailure = createAction(
  '[Meal] Load Meals Failure',
  props<{ error: any }>()
);
export const addMeal = createAction(
    '[Grocery] Add Meal',
    props<{ meal: Meal }>()
  );
  export const addToCart = createAction(
    '[Cart] Add',
    props<{payload:cart}>()
)
export const removeFromCart = createAction(
    '[Cart] Remove',
    props<{payload:cart}>()
)
