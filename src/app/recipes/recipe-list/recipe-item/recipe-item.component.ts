import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  @Input() recipe: Recipe;

  ngOnInit(): void {}
}
