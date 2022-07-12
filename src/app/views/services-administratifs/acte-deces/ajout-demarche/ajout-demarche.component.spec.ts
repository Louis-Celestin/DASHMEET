import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemarcheComponent } from './ajout-demarche.component';

describe('AjoutDemarcheComponent', () => {
  let component: AjoutDemarcheComponent;
  let fixture: ComponentFixture<AjoutDemarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
