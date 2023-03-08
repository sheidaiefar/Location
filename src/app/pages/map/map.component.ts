import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import {  MarkerModel } from '../models/location.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: any;
  markers: MarkerModel[] = [
    { position: [49.290164, 11.1633], name: 'maliheeeeee' },
  ];

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [49.290164, 11.1633],
      zoom: 3,
    });

    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );
    tiles.addTo(this.map);

    this.markers.forEach((marker) => {
      Leaflet.marker(marker.position)
        .addTo(this.map)
        .bindPopup(marker.name)
        .openPopup();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on('click', function (e: any) {
      alert('Lat, Lon : ' + e.latlng.lat + ', ' + e.latlng.lng);
    });
  }

  ngOnDestroy(): void {
    this.map.remove();
  }
}

// import {Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, DoCheck, NgZone} from '@angular/core';
// import {Observable, Subscriber} from 'rxjs';
// import {map} from 'leaflet';
// import {MarkerMetaData} from '../models/location.model'
// import {tileLayer, latLng, marker, Marker} from 'leaflet';
// import {DataService} from "../services/data.service";
// import {MarkerComponent} from "../marker/marker.component";
//
//

//
//   options = {
//     layers: [
//       tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
//     ],
//     zoom: 5,
//     center: latLng(46.879966, -121.726909)
//   };
//

//
//   constructor(
//     private dataService: DataService,
//     private resolver: ComponentFactoryResolver,
//     private injector: Injector,
//     // private dialog: MatDialog,
//     private zone: NgZone) {
//   }
//
//   onMapReady(map: any) {
//     // get a local reference to the map as we need it later
//     this.map = map;
//     this.addMarker();
//   }
//

// setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
//   const {
//      coords: { latitude, longitude },
//   } = position;
// debugger
//   const  map = Leaflet.map('map').setView([latitude, longitude], 3);

//   Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ).addTo(map);
// }

//
//   addMarker() {
//     // simply iterate over the array of markers from our data service
//     // and add them to the map
//
//     for (const entry of this.dataService.getMarkers()) {
//       // dynamically instantiate a HTMLMarkerComponent
//       const factory = this.resolver.resolveComponentFactory(MarkerComponent);
//
//       // we need to pass in the dependency injector
//       const component = factory.create(this.injector);
//
//       // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
//       component.instance.data = entry;
//
//       // we need to manually trigger change detection on our in-memory component
//       // s.t. its template syncs with the data we passed in
//       component.changeDetectorRef.detectChanges();
//
//
//       // create a new Leaflet marker at the given position
//       if (entry.position) {
//         let m = marker(entry.position);
//         // m.addEventListener("click", ()=> {
//         // this.zone.run(() => {this.openExampleDialog();})
//         // })
//       }
//
//       //
//       // //add Event Listener for Click to open a new Modal
//
//
//       // finally add the marker to the map s.t. it is visible
//       // m.addTo(this.map);
//
//       // add a metadata object into a local array which helps us
//       // keep track of the instantiated markers for removing/disposing them later
//       // this.markers.push({
//       //   name: entry.name,
//       //   markerInstance: ,
//       //   componentInstance: component
//       // });
//     }
//   }
//
//   getCurrentPosition(): any {
//     return new Observable((observer: Subscriber<any>) => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position: any) => {
//           observer.next({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//           observer.complete();
//         });
//       } else {
//         observer.error();
//       }
//     });
//   }
//
//   addMarkers() {
//     const icon = Leaflet.icon({
//       iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png',
//       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',
//
//       iconSize: [41, 41], // size of the icon
//       shadowSize: [41, 41], // size of the shadow
//       iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//       shadowAnchor: [4, 62], // the same for the shadow
//       popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
//     });
//
//     this.markerLocations.forEach(t => {
//       Leaflet.marker([t.lat, t.lng], {icon})
//         .addTo(this.map)
//         .bindPopup('Hi!!');
//     })
//   }
//
//   getPosition(e: any) {
//     this.coor = this.getCurrentPosition()
//       .subscribe((position: any) => {
//           this.map.flyTo([position.latitude, position.longitude], 13);
//           console.log([position.latitude, position.longitude])
//         }
//       );
//   }
//
//
// }
