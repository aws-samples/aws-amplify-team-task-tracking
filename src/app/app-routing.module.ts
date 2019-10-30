import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { WeeklytasksComponent } from './weeklytasks/weeklytasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthlytasksComponent } from './monthlytasks/monthlytasks.component';
import { GoalsComponent } from './goals/goals.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  { path: 'weeklytasks', component: WeeklytasksComponent },
  { path: '', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'monthlytasks', component: MonthlytasksComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'goals', component: GoalsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }