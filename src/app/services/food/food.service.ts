import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService { 
  private baseUrl: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Method to fetch meal details by ID
  getMealById(id: string): Observable<any> {
    const url = `${this.baseUrl}/filter.php?a=${id}`;
    return this.http.get<any>(url);
  }
  searchMeals(query: string) {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }
  
}
