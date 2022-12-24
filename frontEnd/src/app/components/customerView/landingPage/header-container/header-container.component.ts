import { Component } from '@angular/core';
import { faUser, faSearch, faPhone, faCartShopping, faHeart, faChevronDown, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent {
  //icons fontawesome
  faUser = faUser;
  faSearch = faSearch;
  faPhone = faPhone;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faChevronDown = faChevronDown;
  faXmark = faXmark;
  faBars = faBars;
}
