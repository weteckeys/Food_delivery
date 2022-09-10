import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.page.html',
  styleUrls: ['./single-photo.page.scss'],
})
export class SinglePhotoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAddComment() {
      this.route.navigate(['/add-comment']);
  }

}
