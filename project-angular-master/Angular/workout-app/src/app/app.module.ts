import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutCardsComponent } from './components/workout-cards/workout-cards.component';
import { WorkoutFullcardComponent } from './components/workout-fullcard/workout-fullcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    LoginRegisterComponent,
    WorkoutsComponent,
    WorkoutCardsComponent,
    WorkoutFullcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
