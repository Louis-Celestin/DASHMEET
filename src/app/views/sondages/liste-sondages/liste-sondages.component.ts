import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sondage } from 'src/app/views/sondages/sondage.model';
import { SondageService } from 'src/app/views/sondages/sondage.service';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss'],
})
export class ListeSondagesComponent implements OnInit {
  sondages!: Sondage[];
  dtOptions: DataTables.Settings = {};

  constructor(private sondageService: SondageService, private router: Router) {}

  ngOnInit(): void {
    this.getSondages();
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }
  private getSondages() {
    this.sondageService.getSondages().subscribe((data) => {
      this.sondages = data;
    });
  }

  // sondageDetails(id: number) {
  //   this.router.navigateByUrl('/sondages/detail-sondage');
  // }

  updateSondage(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteSondage(id: number) {
    this.sondageService.deleteSondage(id).subscribe((data) => {
      console.log(data);
      this.getSondages();
    });
  }
}
