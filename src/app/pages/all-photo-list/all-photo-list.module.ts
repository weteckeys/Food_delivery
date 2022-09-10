import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPhotoListPageRoutingModule } from './all-photo-list-routing.module';

import { AllPhotoListPage } from './all-photo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPhotoListPageRoutingModule
  ],
  declarations: [AllPhotoListPage]
})
export class AllPhotoListPageModule {}
