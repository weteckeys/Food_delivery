import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  tabID = 1;
  qty = 1;
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
  ];
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  plus() {
      this.qty = this.qty + 1
  }

  minus() {
      if(this.qty > 1) {
          this.qty = this.qty - 1
      }
  }

  goToPaymemt() {
    this.router.navigate(['/payment']);
  }

}
