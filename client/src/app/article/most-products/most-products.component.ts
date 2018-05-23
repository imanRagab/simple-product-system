import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-most-products',
  templateUrl: './most-products.component.html',
  styleUrls: ['./most-products.component.css']
})
export class MostProductsComponent implements OnInit {

  articles: Array<object>;
  articlesUrl = '/api/articles';
  selectedArticles: Array<any>;
  mostProductsArticle: object;
  productsCount: Array<object>;
  constructor(
    private api: ApiService,
  ) { 
    this.articles = [];
    this.selectedArticles = [];
    this.mostProductsArticle = {};
  }

  ngOnInit() {
    this.getArticles();
  }

    // get list of articles from api

    getArticles(): void {

      const endPoint = this.articlesUrl;
  
      this.api.get(endPoint).subscribe(
        res => {
          this.articles = res;
        },
        err => {
          console.log(err);
        }
      );
    }

    // count pproducts of selected items

    getMostProductsArticle(): void {

      const endPoint = this.articlesUrl + "/products";
  
      const articles = {"articles": this.selectedArticles};

      console.log(articles);
      this.api.post(endPoint, articles).subscribe(
        res => {
          this.mostProductsArticle = res[0];
          console.log(this.mostProductsArticle);
        },
        err => {
          console.log(err);
        }
      );      
    }
}
