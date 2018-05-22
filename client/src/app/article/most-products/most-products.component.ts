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
  mostProductsArticle: string;
  productsCount: Array<object>;
  constructor(
    private api: ApiService,
  ) { 
    this.articles = [];
    this.selectedArticles = [];
    this.mostProductsArticle = "";
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

    getProductsCount(): void {

      for(let article in this.selectedArticles){
        this.api.get(this.articlesUrl + `/${article}/products`).subscribe(
          res => {
            this.productsCount.push({
              "article": article,
              "count": res
            });
          }
        );
      }
    }

    // get article with maximum products

    getMostProductsArticle(): void {

    }


}
