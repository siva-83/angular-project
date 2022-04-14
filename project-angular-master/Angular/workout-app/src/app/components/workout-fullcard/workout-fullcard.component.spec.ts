import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFullcardComponent } from './workout-fullcard.component';

describe('WorkoutFullcardComponent', () => {
  let component: WorkoutFullcardComponent;
  let fixture: ComponentFixture<WorkoutFullcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutFullcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFullcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
