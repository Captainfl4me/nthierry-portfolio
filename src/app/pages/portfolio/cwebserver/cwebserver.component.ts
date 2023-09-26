import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cwebserver',
  templateUrl: './cwebserver.component.html',
  styleUrls: ['./cwebserver.component.scss']
})
export class CwebserverComponent {

  constructor(private location: Location) {}

  async goBack() {
    this.location.back()
  }

  async open(url: string) {
    window.open(url, "_blank")
  }
}
