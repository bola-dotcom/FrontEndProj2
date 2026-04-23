import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecipeService } from '../../services/recipe.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export class HomePage implements OnInit {
deviceInfo: any;
  recipes: any[] = [];

filteredRecipes: any[] = [];
searchTerm: string = '';
isLoading = true;

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
    this.isLoading = false;
    
  });
  this.getDeviceInfo();
}

filterRecipes(event: any) {

  const term = event.target.value?.toLowerCase() || '';

  console.log("SEARCH TERM:", term); 

  this.filteredRecipes = this.recipes.filter((recipe: any) =>
    recipe.strMeal.toLowerCase().includes(term)
  );

}
async getDeviceInfo() {
 this.deviceInfo = await Device.getInfo();
}
}