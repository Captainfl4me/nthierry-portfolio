import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() name: string = 'Project';
  @Input() info: string = '';
  @Input() description: string = 'Description';
  @Input() image: string = 'https://via.placeholder.com/150';
  @Input() link: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  click() {
    this.router.navigate([this.link], { relativeTo: this.route});
  }
}
