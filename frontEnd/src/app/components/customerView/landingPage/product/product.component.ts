import { HttpClient } from '@angular/common/http';
import { Product } from './../../../../models/product';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;
  products: Product[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.products);

  }

  getApiProductList(): Observable<Product> {
    return this.http.get<Product>('api/getAllProduct').pipe();
  }

  getProductList() {
    this.getApiProductList().subscribe((observer: any) => {
      this.products = observer;
      console.log('products', this.products);
    })
  }
}
