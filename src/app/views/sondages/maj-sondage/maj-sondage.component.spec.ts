/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MajSondageComponent } from './maj-sondage.component';

describe('MajSondageComponent', () => {
  let component: MajSondageComponent;
  let fixture: ComponentFixture<MajSondageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajSondageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
