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

    const endPoint = '/api/articles';

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

}
