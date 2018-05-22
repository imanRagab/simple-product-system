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

  productForm: object;
  articlesList: Array<object>;
  constructor(
    private api: ApiService,
    private router: Router
  ) {
    this.productForm = {};
  }

  ngOnInit() {
    this.getArticles();
  }

  // function to save product to api

  createProduct(): void {

    this.api.post('/api/products', this.productForm).subscribe(
      res => {
        this.router.navigate(['products']);
      },
      error => {
        alert("Can't create product please make sure all fields are filled")
      }
    );
  }

  // get list of articles from api

  getArticles(): void {

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
