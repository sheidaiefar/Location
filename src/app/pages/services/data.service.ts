import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import {MarkerModel} from "../models/location.model";


@Injectable()
export class DataService {
  markers: MarkerModel[] = [
    {
      id: 1,
      name: 'Marker name 1',
      description: 'descr 1',
      position: [ 46.879966, -121.726909 ]
    },
    {
      id: 2,
      name: 'Marker name 2',
      description: 'descr 2',
      position: [ 46.000966, -123.726909 ]
    }
  ];

  getMarkers() {
    return this.markers;
  }

  getMarkerById(id:number) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for(let marker of this.markers) {
      // just add a random number at the end
      marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

}
