import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandesDecesComponent } from './liste-demandes-deces.component';

describe('ListeDemandesDecesComponent', () => {
  let component: ListeDemandesDecesComponent;
  let fixture: ComponentFixture<ListeDemandesDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandesDecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandesDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
