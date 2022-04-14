import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:4000/workouts/'

@Injectable({
  providedIn: 'root'
})
export class FetchWorkoutService {

  constructor(private http: HttpClient ) { }

  workoutList: Array<any> = []

  getData(){
    return this.http.get(baseUrl)
  }

  getWorkoutData(id: string){
    
    return this.http.get(baseUrl + id)
  }
}
