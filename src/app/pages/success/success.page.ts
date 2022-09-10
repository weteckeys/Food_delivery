import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
      this.router.navigate(['/tabs/home']);
  }

}
