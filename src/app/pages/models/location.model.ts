import {tileLayer, latLng, marker, Marker, LatLngExpression} from 'leaflet';
import {MarkerComponent} from "../marker/marker.component";
import {ComponentRef} from "@angular/core";


export enum LocationType{
  business  ,
  residential ,
  military
}

export class LocationModel {
  id?: number;
  name?: string;
  type?: LocationType;
  coordinates?: [number,number];
}

export class MarkerModel{
  id?: number;
  name?: String;
  description?: String;
  position?: LatLngExpression
}


export interface MarkerMetaData {
  name?: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<MarkerComponent>
}
