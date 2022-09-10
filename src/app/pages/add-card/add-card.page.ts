import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  goToProfile() {
      this.router.navigate(['/tabs/profile']);
  }

}
