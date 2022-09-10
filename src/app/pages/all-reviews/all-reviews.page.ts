import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.page.html',
  styleUrls: ['./all-reviews.page.scss'],
})
export class AllReviewsPage implements OnInit {

    images = [
        {
            img : 'assets/imgs/food1.jpg',
            name : 'Food'
        },
        {
            img : 'assets/imgs/food2.jpg',
            name : 'Special'
        },
        {
            img : 'assets/imgs/food3.jpg',
            name : 'Menu'
        },
        {
            img : 'assets/imgs/food4.jpg',
            name : 'All Photos'
        },
    ];

    users = [
        'assets/imgs/user1.jpg',
        'assets/imgs/user2.jpg',
        'assets/imgs/user3.jpg',
        'assets/imgs/user4.jpg',
        'assets/imgs/user5.jpg'
    ];

    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToReviewDetail() {
        this.route.navigate(['/review-detail']);
    }

    goToBack() {
        this.navCtrl.back();
    }

}
