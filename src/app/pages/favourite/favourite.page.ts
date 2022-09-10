import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  restaurants = [
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

}
