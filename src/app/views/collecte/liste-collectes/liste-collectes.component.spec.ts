import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCollectesComponent } from './liste-collectes.component';

describe('ListeCollectesComponent', () => {
  let component: ListeCollectesComponent;
  let fixture: ComponentFixture<ListeCollectesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCollectesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCollectesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
