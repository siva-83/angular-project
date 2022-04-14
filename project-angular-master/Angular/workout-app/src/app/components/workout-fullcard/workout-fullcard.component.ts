import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchWorkoutService } from 'src/app/services/fetch-workout.service';

@Component({
  selector: 'app-workout-fullcard',
  templateUrl: './workout-fullcard.component.html',
  styleUrls: ['./workout-fullcard.component.css']
})
export class WorkoutFullcardComponent implements OnInit {

  constructor(private fetchData: FetchWorkoutService, private route : ActivatedRoute) { }

  id : string = ""

  workoutDetail: any = {}

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id = param['id'])


    this.fetchData.getWorkoutData(this.id)
    .subscribe((data: any) => this.workoutDetail = data)
  }

}
