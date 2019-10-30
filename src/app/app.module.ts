import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { WeeklytasksComponent } from './weeklytasks/weeklytasks.component';
import { MonthlytasksComponent } from './monthlytasks/monthlytasks.component';
import { GoalsComponent } from './goals/goals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { MomentPipe } from './momentpipe';
//Import Amplify dependencies
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WeeklytasksComponent,
    MonthlytasksComponent,
    GoalsComponent,
    DashboardComponent,
    OverviewComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //declare the AmplifyAngularModule
    AmplifyAngularModule
  ],
  providers: [
    //declare the AmplifyService
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
