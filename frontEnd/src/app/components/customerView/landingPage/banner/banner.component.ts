import { Component } from '@angular/core';
import { faTruck, faHeadset, faCreditCard, faRotate } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  faTruck = faTruck;
  faHeadset = faHeadset;
  faCreditCard = faCreditCard;
  faRotate = faRotate;
}
