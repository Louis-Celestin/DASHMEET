import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ModifierProjetComponent } from './modifier-projet/modifier-projet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AlertModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AjoutProjetComponent,
    ListeProjetsComponent,
    ModifierProjetComponent,
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    AlertModule,
  ],
})
export class ProjetsModule {}
