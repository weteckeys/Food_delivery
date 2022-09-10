import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage implements OnInit {

    foodSlider = [
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
            img : 'assets/imgs/food5.jpg'
        },
        {
            img : 'assets/imgs/food6.jpg'
        },
        {
            img : 'assets/imgs/food7.jpg'
        },
    ];

    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

    goToRestList() {
        this.route.navigate(['/all-restaurants']);
    }

}
