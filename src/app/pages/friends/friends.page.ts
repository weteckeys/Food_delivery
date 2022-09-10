import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

    users = [
        {img : 'assets/imgs/user1.jpg'},
        {img : 'assets/imgs/user2.jpg'},
        {img : 'assets/imgs/user3.jpg'},
        {img : 'assets/imgs/user4.jpg'},
        {img : 'assets/imgs/user5.jpg'},
    ];

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
