import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIdeesSignaleesComponent } from './liste-idees-signalees.component';

describe('ListeIdeesSignaleesComponent', () => {
  let component: ListeIdeesSignaleesComponent;
  let fixture: ComponentFixture<ListeIdeesSignaleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeIdeesSignaleesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeIdeesSignaleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
