import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsBoardComponent } from './agents-board.component';

describe('AgentsBoardComponent', () => {
  let component: AgentsBoardComponent;
  let fixture: ComponentFixture<AgentsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
