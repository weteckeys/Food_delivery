import { FilterPage } from './../filter/filter.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

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
  ];

  constructor(private navCtrl: NavController, private modalController: ModalController) { }

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

}
