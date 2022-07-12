import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProblemesComponent } from './liste-problemes.component';

describe('ListeProblemesComponent', () => {
  let component: ListeProblemesComponent;
  let fixture: ComponentFixture<ListeProblemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProblemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProblemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
