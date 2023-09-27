import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-turtlecore',
  templateUrl: './turtlecore.component.html',
  styleUrls: ['./turtlecore.component.scss']
})
export class TurtlecoreComponent {

  constructor(private location: Location) {}

  async goBack() {
    this.location.back();
  }

  async open(url: string) {
    window.open(url, "_blank");
  }
}
