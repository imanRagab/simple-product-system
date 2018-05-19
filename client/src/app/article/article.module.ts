import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent},
  ])
  ],
  declarations: [ListComponent]
})
export class ArticleModule { }
