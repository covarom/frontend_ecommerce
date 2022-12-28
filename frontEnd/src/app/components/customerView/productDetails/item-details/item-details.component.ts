import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/services/rest-api.service';
import { faRotate, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  //fontawesome icons
  faRotate = faRotate;
  faHeart = faHeart;

  product: Product[] = [];
  id: string;
  constructor(private rest: RestApiService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.getProduct(this.route.snapshot.params["id"]);
    // this.getProduct(this.id);
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.rest.getItem('api/getProductById?id=', this.id).subscribe((res: any) => {
      this.product = res
      console.log(this.product);
    })
    // console.log(this.product);
  }

  // getProduct(id: any) {
  //   this.rest.getItem('api/getAllProduct', id).subscribe((res: any) => {
  //     this.product = res;
  //     console.log(this.product);
  //   })
  // }



}
