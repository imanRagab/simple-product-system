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

}
