import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles: Array<object>;
  articlesUrl = '/api/articles';
  constructor(
    private api: ApiService
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
        console.log(res);
        this.articles = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete article

  deleteArticle(id: number): void {

    const endPoint = '${this.articlesUrl}/${id}';

    this.api.delete(endPoint).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
