import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollecteRoutingModule } from './collecte-routing.module';
import { ListeCollectesComponent } from './liste-collectes/liste-collectes.component';


@NgModule({
  declarations: [
    ListeCollectesComponent
  ],
  imports: [
    CommonModule,
    CollecteRoutingModule
  ]
})
export class CollecteModule { }
