import { Injectable } from '@angular/core';
import { MarkerModel } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static SetMarker: any;

  constructor() { }

  SetMarker(markers:MarkerModel[]){
    localStorage.setItem('markers', JSON.stringify(markers))
    console.log(localStorage)
  }


}
