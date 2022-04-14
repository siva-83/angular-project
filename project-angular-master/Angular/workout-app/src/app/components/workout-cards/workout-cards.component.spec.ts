import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCardsComponent } from './workout-cards.component';

describe('WorkoutCardsComponent', () => {
  let component: WorkoutCardsComponent;
  let fixture: ComponentFixture<WorkoutCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
