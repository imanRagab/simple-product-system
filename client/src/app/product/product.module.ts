import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'products', component: ListComponent},
      { path: 'products/create', component: CreateComponent},
      { path: 'products/update/:id', component: UpdateComponent},
  ])
  ],
  declarations: [ListComponent, CreateComponent, UpdateComponent]
})
export class ProductModule { }
