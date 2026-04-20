import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonCardContent,IonCardHeader,IonCard,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,IonCardContent,IonCardHeader,IonCard,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class HomePage implements OnInit {
  recipes: any[] = [];
  constructor(private recipeService: RecipeService) {}
  

ngOnInit() {
  this.loadRecipes();
  }

  loadRecipes(){
    this.recipeService.getRecipes().subscribe({
next:(data:any) => {
  this.recipes = data.meals || [];
},
error:(err) =>{
  console.error('API error:', err);
}

    });
  }
  
}