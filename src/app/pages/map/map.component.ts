import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as Leaflet from 'leaflet';
import { map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
   map: any;

  markerLocations = [
    {
      lat: 38.914764662971436,
      lng: -97.01461108304595
    },
     {
       lat: 2,
       lng: 2
     }
  ]

  constructor() { }

  ngAfterViewInit() {
   this.map = map('map').setView([0, 0], 3);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

      this.addMarkers()
  }

    private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  addMarkers() {
    const icon = Leaflet.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',

        iconSize: [41, 41], // size of the icon
        shadowSize: [41, 41], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

    this.markerLocations.forEach(t => {
      Leaflet.marker([t.lat, t.lng], { icon })
          .addTo(this.map)
          .bindPopup('Hi!!');
    })
  }

getPosition(e:any){
    console.log('e',e)
    const pos = this.map.getCenter()
  console.log(pos)
}


}
