import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sondage } from '../sondage.model';
import { SondageService } from '../sondage.service';

@Component({
  selector: 'app-detail-sondage',
  templateUrl: './detail-sondage.component.html',
  styleUrls: ['./detail-sondage.component.scss']
})
export class DetailSondageComponent implements OnInit {

  id!: number;
  sondage!: Sondage;
  constructor(private route: ActivatedRoute, private sondageService: SondageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sondage = new Sondage();
    this.sondageService.getSondageId(this.id).subscribe( data => {
      this.sondage = data;
      console.log(this.sondage)
    });
  }

}
