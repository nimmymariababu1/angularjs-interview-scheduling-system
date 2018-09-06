import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InterviewerDetailsComponent } from './components/interviewer-details/interviewer-details.component';
import { InterviewScheduleComponent } from './components/interview-schedule/interview-schedule.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'interviewer-details',
    component: InterviewerDetailsComponent
  }, {
    path: 'interview-schedule',
    component: InterviewScheduleComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'candidate-details',
    component: CandidateDetailsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterviewerDetailsComponent,
    InterviewScheduleComponent,
    DashboardComponent,
    CandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
