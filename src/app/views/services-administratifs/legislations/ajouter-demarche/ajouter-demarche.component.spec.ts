import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDemarcheComponent } from './ajouter-demarche.component';

describe('AjouterDemarcheComponent', () => {
  let component: AjouterDemarcheComponent;
  let fixture: ComponentFixture<AjouterDemarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDemarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
