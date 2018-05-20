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
  constructor(
    private api: ApiService,
    private router: Router
  ) {
    this.productForm = {};
  }

  ngOnInit() {
  }

  // function to save product to api

  createProduct(): void {

    this.api.post('/api/products', this.productForm).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    window.location.reload();
    this.router.navigate(['products']);
  }

}
