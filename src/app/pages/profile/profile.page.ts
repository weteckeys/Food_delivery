import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToFriends() {
      this.route.navigate(['/friends']);
  }

  goToEditProfile() {
      this.route.navigate(['/edit-profile']);
  }

  goToPaymentMethod() {
    this.route.navigate(['/payment-method']);
  }

  goToAddresses() {
      this.route.navigate(['/addresses']);
  }

  logout() {
      this.route.navigate(['/login']);
  }

}
