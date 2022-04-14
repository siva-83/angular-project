import { Component, OnInit } from '@angular/core';
import { FetchWorkoutService } from 'src/app/services/fetch-workout.service';

@Component({
  selector: 'app-workout-cards',
  templateUrl: './workout-cards.component.html',
  styleUrls: ['./workout-cards.component.css']
})
export class WorkoutCardsComponent implements OnInit {

  constructor(private fetchData: FetchWorkoutService) { }

  workoutList: Array<any> = []

  ngOnInit(): void {
    this.fetchData.getData()
    .subscribe((data: any) => this.workoutList = data)
  }

}
