import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');

  }
 getRecipeById(id: string) {
  return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}
}