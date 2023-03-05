import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationModel} from "../models/location.model";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  location!: LocationModel;
  shareLocationForm!: FormGroup;
  public data: any;

  constructor() {
  }

  ngOnInit(): void {
    if (this.data.formData) {
      //edit mode
      this.shareLocationForm = new FormGroup({
        'name': new FormControl(this.data.formData.name, Validators.required),

      })
    } else {
      this.shareLocationForm = new FormGroup({
        'name': new FormControl(null, Validators.required),

      })
    }
  }

  onSubmitForm() {
  }

  close() {
  }
}
