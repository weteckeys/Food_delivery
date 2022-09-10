import { FilterPage } from '../filter/filter.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.page.html',
  styleUrls: ['./all-restaurants.page.scss'],
})
export class AllRestaurantsPage implements OnInit {

  tabID = 1;
  restaurants = [
    {
        img : 'assets/imgs/food1.jpg'
    },
    {
        img : 'assets/imgs/food2.jpg'
    },
    {
        img : 'assets/imgs/food3.jpg'
    },
    {
        img : 'assets/imgs/food4.jpg'
    },
    {
      img : 'assets/imgs/food1.jpg'
    },
    {
        img : 'assets/imgs/food2.jpg'
    },
    {
        img : 'assets/imgs/food3.jpg'
    },
    {
        img : 'assets/imgs/food4.jpg'
    },
  ];
  constructor(private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

  async openFilterModel() {
      const modal = await this.modalController.create({
        component: FilterPage,
        cssClass: 'custom_modal'
      });
      return await modal.present();
  }

  goToCart() {
      this.route.navigate(['/cart']);
  }

  goToRestDetail() {
      this.route.navigate(['/restaurants']);
  }

}
