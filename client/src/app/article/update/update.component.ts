import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

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
    private api: ApiService,
    private router: Router
  ) {
    this.articleForm = {};
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


  // update article

  updateArticle(): void {

    this.api.put(`/api/articles/${this.id}`, this.articleForm).subscribe(
      res => {
        this.router.navigate(['articles']);
      },
      error => {
        alert("Can't update the article please make sure all fields are filled")
      }
    );
  }
}
