import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MockDataService } from '../../services/mock.data.service';
import { DetailsPage } from '../details/details';

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

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController, public geolocation: Geolocation, public mockdata:MockDataService) {

    }

    ionViewDidLoad(){
      this.loadMap();
    }

    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    addToMap(spot) {
      var color = this.getRandomColor();
      var poly = new google.maps.Polygon({
        paths: spot,
        draggable: false,
        editable: false,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35
      });

      poly.setMap(this.map);
      var self = this.navCtrl;
      google.maps.event.addListener(poly, 'click', function (event) {
        self.push(DetailsPage);
      });
    }

    loadSpots() {
      var data = this.mockdata.getSpots();
      for (var i = 0; i < data.length; i++) {
        this.addToMap(data[i].geo);
      }
    }

    loadMap(){
      console.log("Loading...");
      //this.geolocation.getCurrentPosition().then((position) => {
        var position  = { "latitude":41.890713, "longitude":-87.624325 }

        this.mockdata.parkwhizSpot(position.latitude, position.longitude).subscribe(data => {
            for (var i = 0; i < data.length; i++) {
              var item = data[i]._embedded['pw:location'];
              var location = item.entrances[0].coordinates;
              var itemLatLng = {lat: location[0], lng: location[1]};
              var marker = new google.maps.Marker({
                position: itemLatLng,
                map: this.map,
                title: item.name
              });
              var self = this.navCtrl;
              google.maps.event.addListener(marker, 'click', function (event) {
                self.push(DetailsPage);
              });
            }
        });
        console.log("Position");
        console.log(position);
        //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let latLng = new google.maps.LatLng(position.latitude, position.longitude);

        //let latLng = new google.maps.LatLng(41,-‎87.623177);

        let mapOptions = {
          center: latLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      //}, (err) => {
        //console.log(err);
      //});

        this.loadSpots();
    }

}
