import { Component } from '@angular/core';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent {
  faHome = faHome;
  faChevronRight = faChevronRight;
}
