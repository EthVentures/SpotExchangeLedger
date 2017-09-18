import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {

/*  map: GoogleMap;
    mapElement: HTMLElement;
    constructor(private googleMaps: GoogleMaps) { }

    ionViewDidLoad() {

    }
    ionViewDidEnter() {
      this.loadMap();
    }

   loadMap() {
      this.mapElement = document.getElementById('map');

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        }
      };

      this.map = this.googleMaps.create(this.mapElement, mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');

          // Now you can use all methods safely.
          this.map.addMarker({
              title: 'Ionic',
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: 43.0741904,
                lng: -89.3809802
              }
            })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });

        });ou
    }*/

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController, public geolocation: Geolocation) {

    }

    ionViewDidLoad(){
      this.loadMap();
    }

    loadMap(){
      console.log("Loading...");
      this.geolocation.getCurrentPosition().then((position) => {
        console.log("Position");
        console.log(position);
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



      }, (err) => {
        console.log(err);
      });

    }

}
