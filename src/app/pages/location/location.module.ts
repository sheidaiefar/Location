import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {LocationComponent} from "./location.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    LocationComponent
  ],
  bootstrap: []
})
export class LocationModule { }
