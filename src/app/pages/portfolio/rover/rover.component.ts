import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss']
})
export class RoverComponent {

  constructor(private location: Location) {}

  async goBack() {
    this.location.back();
  }
}
