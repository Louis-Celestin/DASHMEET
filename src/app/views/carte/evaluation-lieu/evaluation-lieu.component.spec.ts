import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationLieuComponent } from './evaluation-lieu.component';

describe('EvaluationLieuComponent', () => {
  let component: EvaluationLieuComponent;
  let fixture: ComponentFixture<EvaluationLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
