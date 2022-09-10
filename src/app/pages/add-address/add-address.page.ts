import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

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
