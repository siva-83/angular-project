import { Pipe, PipeTransform } from '@angular/core';
import { workouts } from '../models/workouts';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Array<workouts>, ...args: Array<string>): Array<workouts> {
    return employees.filter(e => e.heading.includes(args[0]))
  }

}
