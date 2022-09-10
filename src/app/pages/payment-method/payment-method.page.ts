import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  goToAddCard() {
      this.router.navigate(['/add-card']);
  }

}
