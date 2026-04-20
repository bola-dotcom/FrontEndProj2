import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}