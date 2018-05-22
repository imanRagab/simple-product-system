import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { MostProductsComponent } from './most-products/most-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'articles', component: ListComponent},
      { path: 'articles/create', component: CreateComponent},
      { path: 'articles/update/:id', component: UpdateComponent},
  ])
  ],
  declarations: [ListComponent, CreateComponent, UpdateComponent, MostProductsComponent]
})
export class ArticleModule { }
