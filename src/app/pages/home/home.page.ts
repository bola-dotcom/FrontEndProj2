import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecipeService } from '../../services/recipe.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class HomePage implements OnInit {

  recipes: any[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router
  ) {}

  goToRecipe(id: string) {
  this.router.navigate(['/recipe', id]);
}
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.recipes = data.meals || [];
    });
  }
}