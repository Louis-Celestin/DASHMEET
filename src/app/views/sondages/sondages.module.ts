import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SondagesRoutingModule } from './sondages-routing.module';
// import { AjoutSondageComponent } from './ajout-sondage/ajout-sondage.component';
import { IconModule } from '@coreui/icons-angular';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';
import { DetailSondageComponent } from './detail-sondage/detail-sondage.component';
import { AjoutSondageComponent } from './ajouter-sondage/ajouter-sondage.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    ListeSondagesComponent,
    MesSondagesComponent,
    DetailSondageComponent,
    AjoutSondageComponent

  ],
  imports: [
    CommonModule,
    SondagesRoutingModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    FormsModule,
    DataTablesModule

  ]
})
export class SondagesModule { }
