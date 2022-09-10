import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slides = [
      {
          img : 'assets/imgs/search.png',
          title: 'Quick Search',
          subTitle : 'Set your location to start exploring restaurants allow you.',
      },
      {
          img : 'assets/imgs/groceries.png',
          title: 'Veriety of food',
          subTitle : 'Set your location to start exploring restaurants allow you.',
      },
      {
          img : 'assets/imgs/pins.png',
          title: 'Search for place',
          subTitle : 'Set your location to start exploring restaurants allow you.',
      },
      {
          img : 'assets/imgs/cycling.png',
          title: 'Fast Shipping',
          subTitle : 'Set your location to start exploring restaurants allow you.',
      },

  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToLogin() {
      this.route.navigate(['/login']);
  }

}
