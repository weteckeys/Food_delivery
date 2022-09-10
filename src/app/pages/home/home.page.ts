import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToRestDetail() {
        this.route.navigate(['/rest-detail']);
  }

  goToCollection() {
    this.route.navigate(['/collections']);
  }

  goToRest() {
    this.route.navigate(['/restaurants']);
    // this.route.navigate(['/trending']);
  }

  goToTrending() {
    this.route.navigate(['/trending']);
  }

  goToAllRest() {
      this.route.navigate(['/all-restaurants']);
  }

}
