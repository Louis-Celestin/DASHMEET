import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProblemeComponent } from './detail-probleme.component';

describe('DetailProblemeComponent', () => {
  let component: DetailProblemeComponent;
  let fixture: ComponentFixture<DetailProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
