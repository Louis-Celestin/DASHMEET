import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerActeNaissanceComponent } from './editer-acte-naissance.component';

describe('EditerActeNaissanceComponent', () => {
  let component: EditerActeNaissanceComponent;
  let fixture: ComponentFixture<EditerActeNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerActeNaissanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerActeNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
