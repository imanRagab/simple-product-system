import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productsUrl = '/api/products';
  products: Array<object>;
  constructor(
    private api: ApiService,
  ) {
    this.products = [];
   }

  ngOnInit() {
    this.getProducts();

  }

  // get list of products from api

  getProducts(): void {

    const endPoint = this.productsUrl;

    this.api.get(endPoint).subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
