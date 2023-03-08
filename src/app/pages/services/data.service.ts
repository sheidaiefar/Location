import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import { BehaviorSubject } from 'rxjs';
import {MarkerModel} from "../models/location.model";


@Injectable()
export class DataService {
  markers: MarkerModel[] = [];
  markersSubject = new BehaviorSubject<MarkerModel[]>(this.markers);


  getMarkers() {
    return this
  }

  getMarkerById(id:number) {
    // return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for(let marker of this.markers) {
      // just add a random number at the end
      // marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

}
