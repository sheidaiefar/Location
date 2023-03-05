import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {MapComponent} from "./map.component";
import {LocationModule} from "../location/map.module";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    LocationModule,
    LeafletModule

  ],
  providers: [],
  exports: [
    MapComponent
  ],
  bootstrap: []
})
export class MapModule { }
