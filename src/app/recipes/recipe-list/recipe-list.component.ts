import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Test',
      description: 'Test',
      image: 'test',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
