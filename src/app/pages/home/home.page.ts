import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecipeService } from '../../services/recipe.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export class HomePage implements OnInit {

  recipes: any[] = [];

filteredRecipes: any[] = [];
searchTerm: string = '';

  constructor(private recipeService: RecipeService,
    private router: Router
  ) {}

  goToRecipe(id: string) {
  this.router.navigate(['/recipe', id]);
}
ngOnInit() {
  this.recipeService.getRecipes().subscribe((data: any) => {
    this.recipes = data.meals || [];
    this.filteredRecipes = this.recipes;
  });
}

filterRecipes(event: any) {

  const term = event.target.value?.toLowerCase() || '';

  console.log("SEARCH TERM:", term); // debug

  this.filteredRecipes = this.recipes.filter((recipe: any) =>
    recipe.strMeal.toLowerCase().includes(term)
  );

}
}