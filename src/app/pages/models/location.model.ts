export enum LocationType{
  business  ,
  residential ,
  military
}

export class LocationModel {
  id?: number | string;
  name?: string;
  type?: LocationType;
  coordinates?: [number,number];
}
