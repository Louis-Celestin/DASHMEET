import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandesNaissanceComponent } from './liste-demandes-naissance.component';

describe('ListeDemandesNaissanceComponent', () => {
  let component: ListeDemandesNaissanceComponent;
  let fixture: ComponentFixture<ListeDemandesNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandesNaissanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandesNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
