import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Probleme } from 'src/app/models/probleme';
import { ProblemeService } from 'src/app/services/problemes/probleme.service';

@Component({
  selector: 'app-detail-probleme',
  templateUrl: './detail-probleme.component.html',
  styleUrls: ['./detail-probleme.component.scss'],
})
export class DetailProblemeComponent implements OnInit {
  id!: number;
  probleme!: Probleme;
  constructor(
    private route: ActivatedRoute,
    private problemeService: ProblemeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.probleme = new Probleme();
    this.problemeService.getProblemeById(this.id).subscribe((data) => {
      this.probleme = data;
    });
  }
}
