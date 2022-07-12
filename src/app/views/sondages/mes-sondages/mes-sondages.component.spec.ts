import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSondagesComponent } from './mes-sondages.component';

describe('MesSondagesComponent', () => {
  let component: MesSondagesComponent;
  let fixture: ComponentFixture<MesSondagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesSondagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesSondagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
