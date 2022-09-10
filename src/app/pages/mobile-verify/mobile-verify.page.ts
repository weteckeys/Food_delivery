import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.page.html',
  styleUrls: ['./mobile-verify.page.scss'],
})
export class MobileVerifyPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToUserLocation() {
      this.route.navigate(['/user-location']);
  }

  onOtpChange(eve) {
      console.log(eve);
  }

}
