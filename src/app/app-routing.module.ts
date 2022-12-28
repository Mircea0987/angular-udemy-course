import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingsComponent } from './shoppings/shoppings.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'shopping', component: ShoppingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
