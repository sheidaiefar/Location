import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marker',
  template: `
    <h3>{{ data.name }}</h3>
    <p>
      {{ data.description }}
    </p>
  `
})
export class MarkerComponent {
  @Input() data:any;
}
