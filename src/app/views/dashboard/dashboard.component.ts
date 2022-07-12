import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Agents } from 'src/app/models/agents-mairie';
import { AgentsService } from 'src/app/services/agents-mairie/agents.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ProjetsService } from 'src/app/services/projets/projets.service'
import { Projet } from '../../models/projets'
import { PropositionIdee } from '../../models/idee'
import { CountService } from 'src/app/services/_count/count.service'
import { Sondage } from '../sondages/sondage.model';



interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //instance du modele
  AgentList!: Agents[];
  projects!: Projet[]
  sondages!: Sondage[]
  problemes : any
  Propositions : any
  chartPieData:any;
  chartDoughnutData:any



  //Datatables
  dtOptions: DataTables.Settings = {};

  constructor(
    private chartsData: DashboardChartsData,
    private router: Router,
    private agentMairie: AgentsService,
    private token: TokenStorageService,
    private projectsService: ProjetsService,
    private countService: CountService,

  ) {}
  //initialisons la variable de recupération
  currentUser: any;

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month'),
  });

  ngOnInit(): void {
    this.initCharts();
    this.currentUser = this.token.getUser();
    //Datatables
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.getAgents();
    this.getLastProjects()
    this.getValues()
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  //function de listing des data de la

  getAgents() {
    this.agentMairie
      .getAgentList(this.currentUser.data.Idcommune)
      .subscribe((response) => {
        this.AgentList = response;
      });
  }

  getLastProjects(){
    this.projectsService.getFiveLatsProjets(this.currentUser.data.Idcommune).subscribe((data)=>{
    this.projects=data
    })
  }

   getValues(){
    this.countService.getValues(this.currentUser.data.Idcommune).subscribe((data)=>{
      this.sondages=data
      this.chartPieData = {
        labels: ["Propositions d'idée(%)", 'Problèmes(%)', 'sondages(%)'],
        //, 'Yellow'
        datasets: [
          {
            data:this.sondages,// 50,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], //'#FFCE56'
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], //, '#FFCE56'
          },
        ],
      };

      this.chartDoughnutData = {
        labels: ["Services administratifs(%)", 'Navetets(%)', 'Parkings(%)'], //'Services administratifs''ReactJs', 'Angular',,
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'], //'#E46651', '#00D8FF', '#DD1B16'
            data: [5, 7, 8], //40, 20,, 10
          },
        ],
      };
    })
  }

}
