import {Component} from '@angular/core';
import * as L from 'leaflet';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  shareLocationForm!: FormGroup;

  onSubmitForm() {
  }

  close() {
  }
}
