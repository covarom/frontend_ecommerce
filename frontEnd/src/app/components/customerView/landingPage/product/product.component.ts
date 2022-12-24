import { Product } from './../../../../models/product';
import { Component, Injectable, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Injectable()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.getProductList();

  }

  getProductList() {
    this.rest.getList('api/getAllProduct').subscribe((res: any) => {
      this.products = res;
    })
  }
}
