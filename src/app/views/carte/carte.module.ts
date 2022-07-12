import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteRoutingModule } from './carte-routing.module';
import { IdentificationComponent } from './identification/identification.component';
import { EvaluationLieuComponent } from './evaluation-lieu/evaluation-lieu.component';
import { FormsModule } from '@angular/forms';
import { ListeParkingsComponent } from './liste-parkings/liste-parkings.component';

@NgModule({
  declarations: [IdentificationComponent, EvaluationLieuComponent, ListeParkingsComponent],
  imports: [CommonModule, CarteRoutingModule, FormsModule],
})
export class CarteModule {}
