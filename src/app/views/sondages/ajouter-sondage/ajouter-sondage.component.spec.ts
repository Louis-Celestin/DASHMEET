import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSondageComponent } from './ajouter-sondage.component';

describe('AjouterSondageComponent', () => {
  let component: AjouterSondageComponent;
  let fixture: ComponentFixture<AjouterSondageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSondageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
