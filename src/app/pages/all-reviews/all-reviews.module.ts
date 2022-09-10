import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllReviewsPageRoutingModule } from './all-reviews-routing.module';

import { AllReviewsPage } from './all-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllReviewsPageRoutingModule
  ],
  declarations: [AllReviewsPage]
})
export class AllReviewsPageModule {}
