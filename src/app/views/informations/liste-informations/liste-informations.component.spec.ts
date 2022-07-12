import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInformationsComponent } from './liste-informations.component';

describe('ListeInformationsComponent', () => {
  let component: ListeInformationsComponent;
  let fixture: ComponentFixture<ListeInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
