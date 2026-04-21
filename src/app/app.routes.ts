import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RecipeDetailsPage } from './pages/recipe-details/recipe-details.page';
export const routes: Routes = [
  { path: '', component: HomePage },
   {path:'recipe/:id', component: RecipeDetailsPage }
];