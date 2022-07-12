import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInformationComponent } from './ajouter-information.component';

describe('AjouterInformationComponent', () => {
  let component: AjouterInformationComponent;
  let fixture: ComponentFixture<AjouterInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
