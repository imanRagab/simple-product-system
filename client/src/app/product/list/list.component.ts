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
  filterData: object;
  articlesList: Array<object>;
  constructor(
    private api: ApiService,
  ) {
    this.products = [];
    this.filterData = {};
    this.articlesList = [];
   }

  ngOnInit() {
    this.getProducts();
    this.getArticles();
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

  // delete product

  deleteProduct(id: number): void {

    const endPoint = `${this.productsUrl}/${id}`;

    const ans = confirm('Are you sure you want to delete this Product?');

    if (ans) {
      this.api.delete(endPoint).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
      window.location.reload();
    }
  }

  // filter products

  filterProducts(): void {

    let endPoint = this.productsUrl + '?';
    if (this.filterData['name']) {
      endPoint += `name=${this.filterData['name']}&`;
    }
    if (this.filterData['article']) {
      endPoint += `article=${this.filterData['article']}`;
    }

    this.api.get(endPoint).subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // get list of articles from api

  getArticles(): void {

    console.log(this.articlesList);
    this.api.get('/api/articles').subscribe(
      res => {
        this.articlesList = res;
      },
      err => {
        console.log(err);
      }
    );

  }

}
