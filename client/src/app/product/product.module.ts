import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'products', component: ListComponent},
  ])
  ],
  declarations: [ListComponent]
})
export class ProductModule { }
