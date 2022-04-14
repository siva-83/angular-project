import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { WorkoutFullcardComponent } from './components/workout-fullcard/workout-fullcard.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';

const routes: Routes = [
  {path: "login", component: LoginRegisterComponent},
  {path: "", component: HomeComponent},
  {path: "workouts", component: WorkoutsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "workouts/:id", component: WorkoutFullcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
