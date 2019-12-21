# 1. LAB1 : Creating Angular project

create a new Angular project using command  and enable routing capabilities

```
ng new teamtasks --routing
```


Change directory to the project and install bootstrap css library 

```
cd teamtasks
npm install bootstrap --save
```


Add style in angular.json file. The styles bloc should look like below


```

"styles": [`
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
`],

```



Create angular components 

```
ng g c auth
ng g c weeklytasks
ng g c monthlytasks
ng g c goals
ng g c dashboard
ng g c overview
```

* Auth - Will be used to render amplify authenticator
* weeklytasks - Will display tasks which will be created every week. Associated  for every customer/group
* monthlytasks - Will display tasks which will be created every month. Associated  for every customer/group
* goals - Will display yearly tasks or goals. These are tasks which are not associated with customer/group
* dashboard - Will display dashboard or landing page after login
* overview - Will display the current status of the tasks


Now update app-routing-module.ts so as to navigate between angular components


```
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
```


Update the Index.html as follows


```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Team tasks</title>
  <base href="/">
  <script>
    if(global === undefined){
      var global = window
    }
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```


Add following line in tsconfig.app.json to add node type in compiler option

```
"types":["node"]
```



Update the app.component.html file as below.  This will add the HTML components for navigation and associate them them with the routes you defined earlier.


```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" [routerLink]="[ '/dashboard' ]">Enterprise Team Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" [routerLink]="[ '/dashboard' ]">Enterprise TAM Tracker</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="[ '/weeklytasks' ]">Weekly Tasks <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="[ '/monthlytasks' ]">Monthly Tasks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="[ '/goals' ]">Goals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="[ '/overview']">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="logout()">Logout - {{loggedinuser}}</a>
        </li>
      </ul>
    </div>
  </nav>
</nav>

<div class="container">
  <router-outlet></router-outlet>
</div>
```

Run the ng serve command and check if your routes are working properly. To start local server run


```
ng serve
```


You should be able to see the following screen when we navigate to http://localhost:4200/

![Stubs](https://user-images.githubusercontent.com/5582133/67894817-5a8b2e80-fb7f-11e9-945a-e4acdbef171f.png)


Cick on various menu to check if the routing is working properly




Now start with installing amplify js libary. You will use the aws-amplify library along with aws-amplify-angular library. You also  to use moment js library for time function. Run following command to install this

```
npm install aws-amplify aws-amplify-angular moment
```


Install the amplify js library and add the amplify angular dependencies in app.module.ts as follows


```
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
    OverviewComponent
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
```

Angular will also create e2e folder for end to end testing .

src directory will contain app directory which will have the source code for all the angular components created above




You have completed the client side angular code and now will use amplify library to provision backend infrastructure as well

[Proceed to Lab 2](LAB2.md)
