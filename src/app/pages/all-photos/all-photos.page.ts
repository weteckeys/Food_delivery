import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.page.html',
  styleUrls: ['./all-photos.page.scss'],
})
export class AllPhotosPage implements OnInit {

    isGridView = true;

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
      'assets/imgs/food4.jpg',
      'assets/imgs/food5.jpg',
      'assets/imgs/food6.jpg',
      'assets/imgs/food7.jpg',
      'assets/imgs/food1.jpg',
      'assets/imgs/food2.jpg',
      'assets/imgs/food3.jpg',
    ];

    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    openSinglePhoto() {
        this.route.navigate(['/single-photo']);
    }

    changeView() {
        this.isGridView = !this.isGridView;
    }

    goToAddComment() {
        this.route.navigate(['/add-comment']);
    }

    goToBack() {
      this.navCtrl.back();
    }

}
