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
  constructor(
    private api: ApiService,
  ) { 
    this.articles = [];
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
}
