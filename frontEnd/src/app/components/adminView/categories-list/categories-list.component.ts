import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  products: Product[] = [];
  categories: Category[] = [];
  id: string;

  constructor(private rest: RestApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductByCategoryId(this.route.snapshot.params["id"]);
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    console.log(this.categories);
  }

  getProductByCategoryId(id: any) {
    this.rest.getItem('api/getProductByCategory?category_id=', id).subscribe((res: any) => {
      this.products = res
      console.log(this.products);
    })
  }
}
