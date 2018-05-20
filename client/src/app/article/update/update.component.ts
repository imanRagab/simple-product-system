import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  constructor(
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit() {
  }

}
