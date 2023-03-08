import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MarkerModel} from "../models/location.model";


@Injectable()
export class DataService {
  mark!:MarkerModel;
  markers: MarkerModel[] = [];
  markersSubject = new BehaviorSubject<MarkerModel[]>(this.markers);
  markSubject = new BehaviorSubject<MarkerModel>(this.mark);


  getMarkers() {
    return this.markersSubject.asObservable();
  }

  getMarkerById(id:number) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  // changeMarkerData() {
  //   for(let marker of this.markers) {
  //     // just add a random number at the end
  //     // marker.description = `Some random value ${Math.random() * 100}`;
  //   }
  // }

  changeMarkerData(list: any[], id: number | undefined): void {
    if (id) {
      // this.markers[id] = list;
    }
    this.markersSubject.next(this.markers);
  }

}
