import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './addons/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { WorkoutFullcardComponent } from './components/workout-fullcard/workout-fullcard.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';

const routes: Routes = [
  {path: "login", component: LoginRegisterComponent},
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "workouts", component: WorkoutsComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutComponent, canActivate: [AuthGuard]},
  {path: "contact", component: ContactComponent, canActivate: [AuthGuard]},
  {path: "workouts/:id", component: WorkoutFullcardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
