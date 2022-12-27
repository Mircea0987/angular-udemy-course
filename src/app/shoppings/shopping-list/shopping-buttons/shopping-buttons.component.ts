import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-buttons',
  templateUrl: './shopping-buttons.component.html',
  styleUrls: ['./shopping-buttons.component.css'],
})
export class ShoppingButtonsComponent {
  @Output() itemCreated = new EventEmitter<any>();
  itemName: string;
  ammount = 0;

  add() {
    this.itemCreated.emit({ name: this.itemName, ammount: this.ammount });
  }
}
