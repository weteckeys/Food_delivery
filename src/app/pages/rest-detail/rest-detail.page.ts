import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rest-detail',
  templateUrl: './rest-detail.page.html',
  styleUrls: ['./rest-detail.page.scss'],
})
export class RestDetailPage implements OnInit {

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

    constructor(private route: Router, private navCrtl: NavController) { }

    ngOnInit() {
    }

    goToAllReviews() {
        this.route.navigate(['/all-reviews']);
    }

    goToBack() {
        this.navCrtl.back();
    }

    goToReviewDetail() {
        this.route.navigate(['/review-detail']);
    }

    goToAllPhotos() {
        this.route.navigate(['/all-photos']);
    }

    goToRest() {
        this.route.navigate(['/restaurants']);
    }

    goToAddComment() {
        this.route.navigate(['/add-comment']);
    }

}
