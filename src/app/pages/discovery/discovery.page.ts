import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.page.html',
  styleUrls: ['./discovery.page.scss'],
})
export class DiscoveryPage implements OnInit {

    selectID;
    discover = [
        {
            img : 'assets/imgs/cheers.png',
            name : 'Bars & Hotels',
            place : '42 Places'
        },
        {
            img : 'assets/imgs/tray.png',
            name : 'Fine Dinning',
            place : '30 Places'
        },
        {
            img : 'assets/imgs/shop.png',
            name : 'Cafes',
            place : '50 Places'
        },
        {
            img : 'assets/imgs/destination.png',
            name : 'Nearby',
            place : '10 Places'
        },
        {
            img : 'assets/imgs/fast-food.png',
            name : 'Fast Foods',
            place : '25 Places'
        },
        {
            img : 'assets/imgs/pizza.png',
            name : 'Features Food',
            place : '30 Places'
        },
    ];
    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    selectTab(val) {
        this.selectID = val;
        console.log(val);
    }

    goToBack() {
        this.navCtrl.back();
    }

}
