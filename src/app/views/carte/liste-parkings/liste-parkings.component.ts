import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Communes } from 'src/app/models/communes';
import { Parkings } from 'src/app/models/parkings';
import { ParkingsService } from 'src/app/services/_parkings/parkings.service';

@Component({
  selector: 'app-liste-parkings',
  templateUrl: './liste-parkings.component.html',
  styleUrls: ['./liste-parkings.component.scss'],
})
export class ListeParkingsComponent implements OnInit {
  liste!: any[];
  street!: Communes[];
  constructor(
    private parkingService: ParkingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListeParking();
  }

  getListeParking() {
    this.parkingService.getParkingsList().subscribe((data) => {

      console.log(this.liste);
    });
  }
}
