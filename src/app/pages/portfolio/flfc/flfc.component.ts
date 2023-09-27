import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flfc',
  templateUrl: './flfc.component.html',
  styleUrls: ['./flfc.component.scss']
})
export class FlfcComponent {

  constructor(private location: Location) {}

  async goBack() {
    this.location.back();
  }
}
