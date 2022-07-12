import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsRoutingModule } from './informations-routing.module';
import { AjouterInformationComponent } from './ajouter-information/ajouter-information.component';
import { ListeInformationsComponent } from './liste-informations/liste-informations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AlertModule } from '@coreui/angular';

@NgModule({
  declarations: [AjouterInformationComponent, ListeInformationsComponent],
  imports: [
    CommonModule,
    InformationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    AlertModule,
  ],
})
export class InformationsModule {}
