import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  articleForm: object;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.id = this.route.snapshot.params.id;
    this.getArticle();
  }
  ngOnInit() {
  }

  // get article data

  getArticle(): void {

    this.api.get(`/api/articles/${this.id}`).subscribe(
      res => {
        this.articleForm = res;
      },
      err => {
        console.log(err);
      }
    );

  }
}
