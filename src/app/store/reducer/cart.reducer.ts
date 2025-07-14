import { createReducer, on } from "@ngrx/store";
import { cart, Meal } from "../../model/meal.model";
import { Action } from "rxjs/internal/scheduler/Action";
import { addToCart, removeFromCart } from "../actions/meals.action";
import { state } from "@angular/animations";

const initialState:cart[] = [];
export const cartReducer = createReducer(initialState,on(addToCart,(state,Action) => {
    const bucketItem = state.find(item => item.idMeal === Action.payload.idMeal);
    if(bucketItem){
        return state.map(item=>{
            return item.idMeal === Action.payload.idMeal ? {...item,quantity:item.quantity + Action.payload.quantity} : item
        })
    }
    else{
    return [
        ...state,
        Action.payload
    ]}
}),
on(removeFromCart,(state,Action)=>{
    const existingItem = state.find(item=>item.idMeal === Action.payload.idMeal);
    if(existingItem && existingItem.quantity > 1){
        return state.map(item=>{
            return item.idMeal === Action.payload.idMeal?
            {...item,quantity: item.quantity-1}:item
        })
    }else{
        return state.filter(item => item.idMeal != Action.payload.idMeal);
    }
})
)