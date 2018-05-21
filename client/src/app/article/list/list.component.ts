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
  filterData: object;
  constructor(
    private api: ApiService,
  ) {
    this.articles = [];
    this.filterData = {};
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

  // delete article

  deleteArticle(id: number): void {

    const endPoint = `${this.articlesUrl}/${id}`;

    const ans = confirm('Are you sure you want to delete this Article?');

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

  // filter articles
  filterArticles(): void {

    let endPoint = this.articlesUrl + '?';
    if (this.filterData['name']) {
      endPoint += `name=${this.filterData['name']}&`;
    }
    if (this.filterData['type']) {
      endPoint += `type=${this.filterData['type']}`;
    }

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
