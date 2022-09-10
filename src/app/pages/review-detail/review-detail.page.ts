import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.page.html',
  styleUrls: ['./review-detail.page.scss'],
})
export class ReviewDetailPage implements OnInit {

    images = [
      'assets/imgs/food1.jpg',
      'assets/imgs/food2.jpg',
      'assets/imgs/food3.jpg',
      'assets/imgs/food4.jpg',
      'assets/imgs/food5.jpg',
      'assets/imgs/food6.jpg',
      'assets/imgs/food7.jpg',
      'assets/imgs/food1.jpg',
      'assets/imgs/food2.jpg',
      'assets/imgs/food3.jpg',
    ];

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
