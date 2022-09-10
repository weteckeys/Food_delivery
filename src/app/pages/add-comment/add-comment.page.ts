import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {

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
