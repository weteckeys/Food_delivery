import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRestaurantsPage } from './all-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: AllRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRestaurantsPageRoutingModule {}
