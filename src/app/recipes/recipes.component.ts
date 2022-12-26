import { Component } from '@angular/core';
import { Recipe } from './recipe-list/recipe-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipeList: Recipe[] = [
    {
      name: 'Stew',
      description: 'Very delicous Stew',
      image:
        'https://savoriurbane.com/wp-content/uploads/2017/11/Tocanita-de-porc-cu-cartofi-reteta-simpla.jpg',
    },
  ];
}
