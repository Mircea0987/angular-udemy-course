import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  itemList = [];

  ngOnit() {}

  onItemAdded(itemData: { name: string; ammount: number }) {
    this.itemList.push({ name: itemData.name, ammount: itemData.ammount });
  }

  onRemove(id: number) {
    const position = id;
    this.itemList.splice(position, 1);
  }
}
