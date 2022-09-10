import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google;

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  isMap = true;

  map: any;
  infowindow: any;
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.initMap();
  }

  changeView() {
    this.isMap = !this.isMap;
  }

  goToRestDetail() {
    this.route.navigate(['/rest-detail']);
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 15
      });

      this.infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: { lat: location.coords.latitude, lng: location.coords.longitude },
        radius: 1000,
        type: ['store']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, this.options);
    var myplace = { lat: -33.8665, lng: 151.1956 };
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', function () {
      this.infowindow.setContent(place.name);
      this.infowindow.open(this.map, this);
    });
  }

}
