import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  itemName: string;
  ammount = 0;
  itemList = [];

  ngOnit() {}

  add() {
    this.itemList.push({ name: this.itemName, ammount: this.ammount });
  }
  delete() {
    this.itemList.pop();
  }
  clear() {
    this.itemList = [{}];
  }
}
