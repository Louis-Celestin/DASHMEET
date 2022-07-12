import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Chart } from 'chart.js';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { WidgetsModule } from '../widgets/widgets.module';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ProfileComponent } from './profile/profile.component';
import { DataTablesModule } from 'angular-datatables';
import { AgentsBoardComponent } from './agents-board/agents-board.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, FormControl } from '@angular/forms';
import { BadgeModule } from '@coreui/angular';
@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    DataTablesModule,
    BadgeModule,
  ],
  declarations: [
    DashboardComponent,
    AdminBoardComponent,
    ProfileComponent,
    AgentsBoardComponent,
    EditProfilComponent,
    ChangePasswordComponent,
  ],
})
export class DashboardModule {}
