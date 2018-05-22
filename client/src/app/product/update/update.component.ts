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
  productForm: object;
  articlesList: Array<object>;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {
    this.productForm = {};
    this.id = this.route.snapshot.params.id;
    this.getProduct();
  }

  ngOnInit() {
    this.getArticles();
  }

   // get product data

   getProduct(): void {

    this.api.get(`/api/products/${this.id}`).subscribe(
      res => {
        this.productForm = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // update product

  updateProduct(): void {

    this.api.put(`/api/products/${this.id}`, this.productForm).subscribe(
      res => {
        this.router.navigate(['products']);
      },
      error => {
        alert("Can't update the product please make sure all fields are filled")
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
