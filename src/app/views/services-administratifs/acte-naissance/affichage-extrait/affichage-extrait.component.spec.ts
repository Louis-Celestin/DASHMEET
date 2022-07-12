import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageExtraitComponent } from './affichage-extrait.component';

describe('AffichageExtraitComponent', () => {
  let component: AffichageExtraitComponent;
  let fixture: ComponentFixture<AffichageExtraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageExtraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageExtraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
