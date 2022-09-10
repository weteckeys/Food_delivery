import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    tabID = 1;
    constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

    onOtpChange(eve) {

    }

    goToLogin() {
        this.router.navigate(['/login']);
    }
}
