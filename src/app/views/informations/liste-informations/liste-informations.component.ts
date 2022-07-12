import { Component, OnInit } from '@angular/core';
import { InformationsService } from 'src/app/services/informations/informations.service';
import { Router } from '@angular/router';
import { Informations } from 'src/app/models/information';
// import { Information } from '../information';

@Component({
  selector: 'app-liste-informations',
  templateUrl: './liste-informations.component.html',
  styleUrls: ['./liste-informations.component.scss'],
})
export class ListeInformationsComponent implements OnInit {
  infos!: Informations[];
  dtOptions: DataTables.Settings = {};
  constructor(
    private informationService: InformationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllInfos();
    //Datatables
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }

  //Read all information
  getAllInfos() {
    this.informationService.getInfoslist().subscribe(
      (data: any) => {
        this.infos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  InfosDelete(id: number) {
    this.informationService.InfosDelete(id).subscribe((data) => {
      console.log(data);
      this.getAllInfos();
    });
  }
  //Function of alert
  visible = false;

  onVisibleChange(eventValue: boolean) {
    this.visible = eventValue;
  }

  onResetDismiss() {
    this.visible = true;
  }
}
