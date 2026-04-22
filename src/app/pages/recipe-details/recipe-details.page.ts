import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { StorageService } from '../../services/storage';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RecipeDetailsPage implements OnInit {

  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.recipeService.getRecipeById(id).subscribe((data: any) => {
        this.recipe = data.meals[0];
      });
    }
  }

  async addToFavourites(){

    let favourites = await this.storage.get('favourites');

    if(!favourites){
      favourites = [];
    }
    const exists = favourites.find((r:any) => r.idMeal === this.recipe.idMeal);

    if(!exists){
      favourites.push(this.recipe);
      await this.storage.set('favourites', favourites);
    }
  }
}