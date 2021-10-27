import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists/lists.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    AppMaterialModule
  ]
})
export class ListsModule { }
