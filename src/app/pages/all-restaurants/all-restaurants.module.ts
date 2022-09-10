import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRestaurantsPageRoutingModule } from './all-restaurants-routing.module';

import { AllRestaurantsPage } from './all-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRestaurantsPageRoutingModule
  ],
  declarations: [AllRestaurantsPage]
})
export class AllRestaurantsPageModule {}
