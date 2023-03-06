import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {LocationComponent} from "./location.component";
import { ReactiveFormsModule} from "@angular/forms";
import {MapModule} from "../map/map.module";

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    BrowserModule,
    MapModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    LocationComponent
  ],
  bootstrap: []
})
export class LocationModule { }
