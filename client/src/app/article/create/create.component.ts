import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  articleForm: object;
  constructor(
    private api: ApiService,
    private router: Router
  ) {
    this.articleForm = {};
   }

  ngOnInit() {
  }

  // function to save article to api

  createArticle(): void {

    this.api.post('/api/articles', this.articleForm).subscribe(
      res => {
        this.router.navigate(['articles']);
      },
      error => {
        alert("Can't create article please make sure all fields are filled")
      }
    );
  }

}
