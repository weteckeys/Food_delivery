import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllReviewsPage } from './all-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: AllReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllReviewsPageRoutingModule {}
