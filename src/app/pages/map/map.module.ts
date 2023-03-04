import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {MapComponent} from "./map.component";
import {LocationModule} from "../location/map.module";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    LocationModule

  ],
  providers: [],
  exports: [
    MapComponent
  ],
  bootstrap: []
})
export class MapModule { }
