import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-photo-list',
  templateUrl: './all-photo-list.page.html',
  styleUrls: ['./all-photo-list.page.scss'],
})
export class AllPhotoListPage implements OnInit {

  images = [
    'assets/imgs/food1.jpg',
    'assets/imgs/food2.jpg',
    'assets/imgs/food3.jpg',
    'assets/imgs/food4.jpg',
    'assets/imgs/food5.jpg',
    'assets/imgs/food6.jpg',
    'assets/imgs/food7.jpg',
    'assets/imgs/food1.jpg',
    'assets/imgs/food2.jpg',
    'assets/imgs/food3.jpg',
    'assets/imgs/food4.jpg',
    'assets/imgs/food5.jpg',
    'assets/imgs/food6.jpg',
    'assets/imgs/food7.jpg',
    'assets/imgs/food1.jpg',
    'assets/imgs/food2.jpg',
    'assets/imgs/food3.jpg',
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAddComment() {
      this.route.navigate(['/add-comment']);
  }

}
