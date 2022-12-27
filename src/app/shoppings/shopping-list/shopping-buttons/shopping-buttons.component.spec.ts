import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingButtonsComponent } from './shopping-buttons.component';

describe('ShoppingButtonsComponent', () => {
  let component: ShoppingButtonsComponent;
  let fixture: ComponentFixture<ShoppingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
