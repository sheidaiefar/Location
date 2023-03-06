import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationModel} from "../models/location.model";
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  location!: LocationModel;
  shareLocationForm!: FormGroup;
  subscription = new Subscription();

  public data: any;

  constructor() {
  }

  ngOnInit(): void {

    this.shareLocationForm = new FormGroup<any>(
      {
        'name': new FormControl(null),
        'type': new FormControl(null),
        'coordinates': new FormControl([0, 0])
      });
    this.shareLocationForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    // if (this.location) {
    //   //edit mode
    //   this.shareLocationForm = new FormGroup({
    //     'name': new FormControl(this.location.name, Validators.required),
    //
    //   })
    // } else {
    //   this.shareLocationForm = new FormGroup({
    //     'name': new FormControl(null, Validators.required),
    //
    //   })
    // }


  }

  onSubmitForm() {
    console.log(this.shareLocationForm)

    //   location = {
    //   name: this.shareLocationForm.value.name,
    // }
    // if (this.data.formData) {
    //   //edit mode
    //   data.id = this.data.formData.id;
    //   this.subscription.add(this.budgetPeriodCrudService.update(data).subscribe(res => {
    //     if (res) {
    //       // this.dialogRef.close({status: 'success-update', res: res});
    //     }
    //   }));
    // } else {
    //   this.subscription.add(this.budgetPeriodCrudService.create(data).subscribe(res => {
    //     if (res) {
    //       // this.dialogRef.close({status: 'success-add', res: res});
    //     }
    //   }));
    // }
  }


  close() {
  }
}
