import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../../services/storage';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class FavouritesPage {

  favourites: any[] = [];

  constructor(private storage: StorageService) {}

  async ionViewWillEnter() {
    const data = await this.storage.get('favourites');
    this.favourites = data || [];
  }
  async removeFavourite(id:string){
    let favourites = await this.storage.get('favourites');

    favourites = favourites.filter((r: any) => r.idMeal !== id);
    await this.storage.set('favourites', favourites);
  this.favourites =favourites;
  }

}