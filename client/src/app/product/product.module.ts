import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'products', component: ListComponent},
  ])
  ],
  declarations: [ListComponent, CreateComponent]
})
export class ProductModule { }
