import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Agents } from 'src/app/models/agents-mairie';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { UserService } from 'src/app/services/_user-services/user.service';
import { DashboardChartsData, IChartProps } from '../dashboard-charts-data';

@Component({
  selector: 'app-agents-board',
  templateUrl: './agents-board.component.html',
  styleUrls: ['./agents-board.component.scss'],
})
export class AgentsBoardComponent implements OnInit {
  content!: any;
  currentUser: any;
  agent!: Agents[];
  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private chartsData: DashboardChartsData
  ) {}

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month'),
  });

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  ngOnInit(): void {
    this.initCharts();
    //this.currentUser = this.token.getUser().data.id;
    this.currentUser = this.token.getUser();
    this.userService.getUserBoard(1).subscribe({
      next: (data) => {
        this.agent = data;
      },
      error: (err) => {
        this.agent = JSON.parse(err.error).message;
      },
    });
  }

  chartPieData = {
    labels: ['Services administratifs(%)', 'Navettes(%)', 'parkings(%)'], //, 'Yellow'
    datasets: [
      {
        data: [90, 85, 50], // 50,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], //'#FFCE56'
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], //, '#FFCE56'
      },
    ],
  };

  chartDoughnutData = {
    labels: ["Propositions d'idée(%)", 'Problèmes(%)', 'sondages(%)'], //'Services administratifs''ReactJs', 'Angular',,
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF'], //'#E46651', '#00D8FF', '#DD1B16'
        data: [80, 40, 20], //40, 20,, 10
      },
    ],
  };
}
