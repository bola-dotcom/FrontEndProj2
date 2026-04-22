import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RecipeDetailsPage } from './pages/recipe-details/recipe-details.page';
import { FavouritesPage } from './pages/favourites/favourites.page';
export const routes: Routes = [
  { path: '', component: HomePage },
  {path: 'favourites', component: FavouritesPage},
  { path: 'recipe/:id', component: RecipeDetailsPage }
];