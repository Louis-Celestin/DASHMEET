import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandesLegalisationComponent } from './liste-demandes-legalisation.component';

describe('ListeDemandesLegalisationComponent', () => {
  let component: ListeDemandesLegalisationComponent;
  let fixture: ComponentFixture<ListeDemandesLegalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandesLegalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandesLegalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
