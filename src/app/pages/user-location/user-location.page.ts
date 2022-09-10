import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.page.html',
  styleUrls: ['./user-location.page.scss'],
})
export class UserLocationPage implements OnInit {

  autocomplete1: { 'query': string };
  autocompleteItems1: any = [];
  GoogleAutocomplete;

  countries = ['India', 'Australia', 'France', 'Korean', 'Brazil', 'Canada', 'Japan'];

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete1 = { query: '' };
    this.autocompleteItems1 = [];
  }

  goToHome() {
    this.route.navigate(['tabs']);
  }

  onSearchChange1(event) {
    if (this.autocomplete1.query === '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete1.query }, (predictions, status) => {
      this.autocompleteItems1 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems1.push(element.description);
      });
    });
  }

  selectSearchResult1(item) {
    console.log(item);
    this.autocompleteItems1 = [];
    this.autocomplete1.query = item;
  }

  goToBack() {
    this.navCtrl.back();
  }

}
