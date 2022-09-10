import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPhotoListPage } from './all-photo-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllPhotoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPhotoListPageRoutingModule {}
