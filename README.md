# Team Task Tracking Tool



# Team Task Project

When we work as a team we usually end up identifying activities which needs to be done on repeating basis. These activities needs to be tracked and ensured that we complete them on time.

Hence we will be bulding a team task tracking tool. This tool dynamically creates  weekly, monthly and yearly  tasks based on meta. 

This project can help you track those items and ensure all team members act on customer specific actions and Yearly Goals on regular basis.

So if you are working in a team which needs to carry out certain tasks in regular interval, this will be a good starting point.

Also, it will help you understand how easy it is to create an application using Amplify in less than an hour. You would learn about Amplify's capabilities to help you integrate with Appsync with Dynamodb, cloudfront, s3 and cognito


We would be using following architecture to develop this tool

![AppsyncTamTasks](https://user-images.githubusercontent.com/5582133/69803272-b50cbe80-1201-11ea-9a6d-eeac7ddce27a.jpg)



Prerequisite (Things you need to have before you start building)

1. NodeJS and NPM - Installation instructions - https://nodejs.org/en/download/
2. Angular CLI - Installation instructions - https://angular.io/cli
3. AWS CLI - Installation instructions https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
4. Amplify CLI - Installation instructions - https://aws-amplify.github.io/docs/cli-toolchain/quickstart


You need to  install NPM 6.10.0+ , Node v11.14.0+ , Angular CLI version  8.0.6+ and Angular version 8.0.3+  


This exercise is divided into 3 Labs
[LAB1 : Creating Angular project](#LAB1)
[LAB2 : Adding Amplify resources](#LAB2)
[LAB3 : Adding application logic](#LAB3)
[LAB4 : Create CI/CD Pipelines](#LAB4)



You need to complete LAB exercie in sequence (LAB1 followed by LAB2 followed by LAB3)


#LAB1 : Creating Angular project

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
<nav class="navbar navbar-expand-lg navbar-light bg-light" *ngIf=loggedinuser>
  <a class="navbar-brand" [routerLink]="[ '/dashboard' ]">Enterprise Team Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" *ngIf=loggedinuser>
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


You have completed the client side angular code and now will use amplify library to provision backend infrastructure as well


LAB2 : Adding Amplify resources


Start by initialising amplify project. 

```
amplify init
```

 Choose following configurations (Answers in **Bold**)


> ? Enter a name for the project (teamtasks)    **teamtasks**

> ? Enter a name for the environment **dev**

> ? Choose your default editor **Visual Studio Code**

> ? Choose the type of app that you're building **javascript**

> ? What javascript framework are you using **angular**

> ? Source Directory Path **src**

> ? Distribution Directory Path  **dist**

> ? Build Command **npm run-script build**

> ? Start Command **ng serve**

> ? Do you want to use an AWS profile? **Yes.   **(Since I AWS CLI configured on my local development machine)

> ? Please choose the profile you want to use **default **(My aws cli profile is named default)



Once the command is run successfully , you will be displayed a message 


> *Your project has been successfully initialized and connected to the cloud!*




A new file will be created with name aws-export.js
This is a dynamically generated file which has the configuration to ensure the javascript angular module can communicate with the API we will be developing.

Since we are developing a TS project , we might need to copy the aws-export.js and create a new file with name aws-export.ts. We need to do this everytime we create/update/delete an serverside resource. You will automate this at later stage.



After that import the exports file in main.ts. The main.ts file should look like this


```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Amplify.configure(awsconfig);
```



Now start creating resources which includes Auth, API and Hosting.

To create a auth, run command 


```
amplify add auth
```


Below are the options you  can choose. Chosen option in Bold.


> Do you want to use the default authentication and security configuration? **Default configuration**

> How do you want users to be able to sign in? **Email**

> Do you want to configure advanced settings? **Yes, I want to make some additional changes**.

> What attributes are required for signing up? (Press <space> to select, <a> to toggle all,<i> to invert selection)**Email**

> Do you want to enable any of the following capabilities? **Email Domain Filtering (whitelist)**

> Enter a comma-delimited list of allowed email domains (example: 'mydomain.com, myotherdo

> main.com'). [**mydummydomain.com**](http://mydummydomain.com/)

> Do you want to edit your email-filter-whitelist function now? **N**



Add API (Appsycn) resource by running following command


```
amplify add api
```

You can choose the following options. Chosen option in Bold.


> ? Please select from one of the below mentioned services **GraphQL**

> ? Provide API name: **teamtasks**

> ? Choose an authorization type for the API **Amazon Cognito User Pool**

> ? Do you have an annotated GraphQL schema? **No**

> ? Do you want a guided schema creation? **No**

> ? Provide a custom type name **MyType**


The above action will create a file named ./teamtasks/amplify/backend/api/teamtasks/schema.graphql 
Update the content of the schema file as 


```
# This is reminder model which will contain multiple tasks. Each remider has a frequency associated with it
# Auth attribute ensures that only owner of the reminders can access them
type Reminder @model @auth(rules: [{allow: owner}]) {
  id: ID!
  user: String!
  customer: String!
  start: AWSDateTime!
  month: Int!
  week: Int!
  year: Int!
  additionalAttribute: String!
  type: frequency!
  tasks: [Task] @connection(name: "ReminderTasks")
}

#Each reminder has one or more multiple tasks. Each task as one or more optional comments and one or more mandatory comments
type Task @model @auth(rules: [{allow: owner}]) {
  id: ID!
  title: String!
  description: String!
  status: Boolean!
  reminder: Reminder @connection(name: "ReminderTasks")
  comments: [Comment] @connection(name: "TaskComments")
  mandatorycomment: [MandatoryComment] @connection(name: "TaskMandatoryComments")
}

#This is schema for comment assiciated with comments
type Comment @model @auth(rules: [{allow: owner}]) {
  id: ID!
  content: String,
  addedby: String,
  addedon: AWSDateTime!
  post: Task @connection(name: "TaskComments")
}

#This is schema for comment assiciated with comments. It has additional attribute names content to be displayed on the UI control
type MandatoryComment @model @auth(rules: [{allow: owner}]) {
  id: ID!
  title: String
  content: String,
  addedby: String,
  addedon: AWSDateTime!
  task: Task @connection(name: "TaskMandatoryComments")
}

# Enum for frequency
enum frequency {
  WEEKLY
  MONTHLY
  QUARTERLY
  YEARLY
  ADHOC
}

# this is model for customer/group and its assiciation with the application user
# Only users with Admin group can add/remove/update objects 
# for all other users mentioned in groupsCanAccess only read operation is permitted.
type Customer @model @auth(rules: [
    { allow: groups, groupsField: "groupsCanAccess", operations: [read] }
    { allow: groups, groups: ["Admin"] }
    ]){
  id: ID!
  customername: String!
  user: String!
  groupsCanAccess: [String]!
}

# this is metadata type for creating Reminders
type ReminderMetaData @model @auth(rules: [
    { allow: groups, groupsField: "groupsCanAccess", operations: [read] }
    { allow: groups, groups: ["Admin"] }
    ]) {
  id: ID!
  type: frequency!
  tasks: [TaskMetaData] @connection(name: "ReminderTasksMeta")
  groupsCanAccess: [String]!
}

# this is metadata type for creating taks
type TaskMetaData @model @auth(rules: [
    { allow: groups, groupsField: "groupsCanAccess", operations: [read] }
    { allow: groups, groups: ["Admin"] }
    ]) {
  id: ID!
  title: String!
  description: String!
  reminder: ReminderMetaData @connection(name: "ReminderTasksMeta")
  mandatorycomments: [MandatoryCommentMetaData] @connection(name: "TaskMandatoryCommentsMeta")
  groupsCanAccess: [String]!
}

# this is metadata type for creating mandatory tasks
type MandatoryCommentMetaData @model @auth(rules: [
    { allow: groups, groupsField: "groupsCanAccess", operations: [read] }
    { allow: groups, groups: ["Admin"] }
    ]){
  id: ID!
  title: String
  task: TaskMetaData @connection(name: "TaskMandatoryCommentsMeta")
  groupsCanAccess: [String]!
}
```


Create a hosting resource for the application where the angular application will be hosted. Do this by running following command


```
amplify add hosting
```


Choose the following options. Selected option in bold


> ? Select the environment setup: **PROD (S3 with CloudFront using HTTPS)**

> ? hosting bucket name **teamtasks-xxxxxxxx-hostingbucket**

> ? index doc for the website **index.html**

> ? error doc for the website **index.html**



Now you are done with the resources creation and can check the status by running below command


```
amplify status
```


Output shown should be similar as shown below

![amplify_status](https://user-images.githubusercontent.com/5582133/67894809-58c16b00-fb7f-11e9-8b45-ec429a54e812.png)

Publish this resources by running following command


```
amplify push
```


Choose following options. Chosen option in bold



> ? Choose the code generation language target **angular**

> ? Enter the file name pattern of graphql queries, mutations and subscriptions **src/graphql/*/.graphql**

> ? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions **Yes**

> ? Enter maximum statement depth [increase from default if your schema is deeply nested] **5**

> ? Enter the file name for the generated code **src/app/API.service.ts**


Once the operation is complete,  copy the content from  aws-export.js to aws-export.ts


In the subsequent sections, you will write the functional logic and consume the amplify API.


3. LAB3 : Adding application logic  

Start with authentication.  

Update the app.component.ts as following


```
import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamtasks';
  signedIn: boolean;
  loggedinuser: string;
  user: any;
  constructor(private amplifyService: AmplifyService, private router: Router) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;

        } else {
          this.user = authState.user;
          this.loggedinuser = this.user.attributes.email;
          console.log('Loggedin User', this.user);
          this.router.navigate(['/dashboard']);
        }
      });
  }
  async logout() {
    await Auth.signOut().then((res) => {
      this.router.navigate(['']);
    });
  }
}
```


Update the app.component.html and display the navigation bar if loggedinuser flag is true


```
<nav class="navbar navbar-expand-lg navbar-light bg-light" *ngIf = loggedinuser>
```

We would be using the default amplify-authenticator component to render the UI for login screen. To do this , update the auth.component.html 


```
<amplify-authenticator></amplify-authenticator>
```


Update style.css with following  lines to import styles from amplify and bootstrap libraries


```
@import '~aws-amplify-angular/theme.css';
@import '~bootstrap/dist/css/bootstrap.min.css';
```

Add a logout link in app.component.html


```
<li class="nav-item">
          <a class="nav-link" href="#" (click)="logout()">Logout - {{loggedinuser}}</a>
</li>
```



You can now test the application locally by running ng serve


You should be displayed the default login page as below

![amplify-auth](https://user-images.githubusercontent.com/5582133/67894810-595a0180-fb7f-11e9-8398-f937b9ce0c35.png)


Create a user by clicking Create account link. Once you create a user with email from whitelist domain , you can proceed with login and access the dashboard page. You can navigate across pages and logout of the system.


Since you will not be developing Admin functionality in this application to  manage the meta-data as yet, you will need to bootstrap the meta data by adding data in the dynamodb tables directly

Login to the AWS console and import the data in dynamodb table with name similar to ReminderMetaData-xxxxxxxx-dev

Use following json to add data to metadata tables

ReminderMetaData-xxxxxxxx-dev

```
{
"__typename": "ReminderMetaData",
"createdAt": "2019-07-16T12:29:54.714Z",
"id": "1",
"type": "WEEKLY",
"updatedAt": "2019-07-16T12:29:54.714Z",
"groupsCanAccess": [
"user"
]
}

{
  "__typename": "ReminderMetaData",
  "createdAt": "2019-07-16T12:29:54.714Z",
  "id": "2",
  "type": "MONTHLY",
  "updatedAt": "2019-07-16T12:29:54.714Z",
  "groupsCanAccess": [
    "user"
  ]
}

{
  "__typename": "ReminderMetaData",
  "createdAt": "2019-07-16T12:29:54.714Z",
  "id": "4",
  "type": "YEARLY",
  "updatedAt": "2019-07-16T12:29:54.714Z",
  "groupsCanAccess": [
    "user"
  ]
}
```


TaskMetaData-xxxxxxxx-dev



```
{
"id": "1",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.526Z",
"description": "Review customer support tickets for this week and ensure there are no escalations",
"taskMetaDataReminderId": "1",
"title": "Review support tickets",
"updatedAt": "2019-07-16T12:30:02.526Z",
"groupsCanAccess": [
"user"
]
}

{
"id": "2",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.526Z",
"description": "Review highest volume channel in CRM",
"taskMetaDataReminderId": "1",
"title": "Review Channel",
"updatedAt": "2019-07-16T12:30:02.526Z",
"groupsCanAccess": [
"user"
]
}


{
"id": "3",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.526Z",
"description": "Categorize and review leads by sales revenue",
"taskMetaDataReminderId": "1",
"title": "Review leads",
"updatedAt": "2019-07-16T12:30:02.526Z",
"groupsCanAccess": [
"user"
]
}


{
"id": "4",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.548Z",
"description": "Browse and review product lisitng on market place",
"taskMetaDataReminderId": "2",
"title": "Review Product listingss",
"updatedAt": "2019-07-16T12:30:02.548Z",
"groupsCanAccess": [
"user"
]
}


{
"id": "5",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.548Z",
"description": "Send the SEO and adwords report to manager",
"taskMetaDataReminderId": "2",
"title": "SEO Reports",
"updatedAt": "2019-07-16T12:30:02.548Z",
"groupsCanAccess": [
"user"
]
}

{
"id": "6",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.526Z",
"description": "Have career growth plan in place",
"taskMetaDataReminderId": "4",
"title": "CGP Preperation",
"updatedAt": "2019-07-16T12:30:02.526Z",
"groupsCanAccess": [
"user"
]
}

{
"id": "7",
"__typename": "TaskMetaData",
"createdAt": "2019-07-16T12:30:02.526Z",
"description": "Publish a whitepaper on product retention",
"taskMetaDataReminderId": "4",
"title": "Whitepaper",
"updatedAt": "2019-07-16T12:30:02.526Z",
"groupsCanAccess": [
"user"
]
}
```


MandatoryCommentMetaData-xxxxxxx-dev


```
{
"id": "1",
"__typename": "MandatoryCommentMetaData",
"createdAt": "2019-07-29T11:02:26.077Z",
"mandatoryCommentMetaDataTaskId": "7",
"title": "Paper Name 1",
"updatedAt": "2019-07-29T11:02:26.077Z",
"groupsCanAccess": [
"user"
]
}

{
"id": "2",
"__typename": "MandatoryCommentMetaData",
"createdAt": "2019-07-29T11:02:26.077Z",
"mandatoryCommentMetaDataTaskId": "7",
"title": "Paper Name 2",
"updatedAt": "2019-07-29T11:02:26.077Z",
"groupsCanAccess": [
"user"
]
}
```



Map users who have registered to customer/group by adding data in 

```

{
"__typename": "Customer",
"createdAt": "2019-08-26T11:21:11.007Z",
"customername": "Delta Echo",
"groupsCanAccess": [
"user"
],
"id": "1",
"updatedAt": "2019-08-26T11:21:11.007Z",
"user": "dummyuser@amazon.com"
}
```




Also create two groups in cognito console and assign either Admin or User or both group to the registered user.
Automate the assigning of user group by writing a post confirmation trigger lambda function. Sample code below


```
'use strict';
var AWS = require('aws-sdk');
module.exports.addUserToGroup = (event, context, callback) => {
  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
  var params = {
    GroupName: 'user', 
    UserPoolId: event.userPoolId, 
    Username: event.userName 
  };
  if(! (event.request.userAttributes["cognito:user_status"]==="CONFIRMED" && event.request.userAttributes.email_verified==="true") )
    callback("User was not properly confirmed and/or email not verified")
  cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
    if (err) {
      callback(err) 
    }
    callback(null, event);        
  });  
};


```



Now use API Service created by amplify to access mutation and queries for graphql as follows



```
const weeklyresponse = await this.api.ListReminders({
      user: {
        eq: this.appcomponent.user.attributes.email
      },
      type: {
        eq: frequency.WEEKLY
      },
      week: {
        eq: this.week
      }

});
```



You can make some modifications in API.service.ts file to fetch reminders details in a single call instead of making multiple calls.  One such change is List Reminder query

```
export type ListRemindersQuery = {
  __typename: "ModelReminderConnection";
  items: Array<{
    __typename: "Reminder";
    id: string;
    user: string;
    customer: string;
    start: string;
    month: number;
    week: number;
    year: number;
    additionalAttribute: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskConnection";
      items: {
        __typename: "Tasks";
        id: string;
        title: string;
        description: string;
        status: boolean;
        comments: {
          __typename: "ModelCommentConnection";
          items: Array<{
            __typename: "Comment";
            id: string;
            addedby: string;
            addedon: string;
            content: string | null;
          } | null> | null;
          nextToken: string | null;
        } | null;
      }
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};
```


Now start adding  application function logic to create and display reminders and tasks based on meta-data you  have configured earlier.

Add functionality to mark the task as complete. Sample code 


```
async onClickMe(taskid: string, currstatus: boolean) {
    await this.apiv2.UpdateTask({
      id: taskid,
      status: !currstatus
    });
}
```

You can also subscribe to events for any changes. One such example is 


```
this.api.OnCreateCommentListener.subscribe(async (comment) => {

// logic to act when new comment is created

});
```

Add following lines in src/polyfills.ts


```
import * as process from 'process';
window['process'] = process;

```


Add application logic in the following components

* weeklytasks
* monthlytasks
* goals
* dashboard
* overview


Full source code can be found  in this repository  

Now will re-publish the angular application by running

```
amplify publish
```

4. LAB4 : Create CI/CD Pipelines

Once you are done with upload the files on github(or code commit) repository , you will now setup the pipeline for automated build and deployment.
Create a branch in git representing dev. 

For this  add a build file with name amplify.yml in the project root directory

```
version: 0.1
backend:
  phases:
    build:
      commands:
        - '# Execute Amplify CLI with the helper script'
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
        - pwd
        - cp src/aws-exports.js src/aws-exports.ts
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist/teamtasks
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Now login into  AWS web Console and navigate to the AWS Amplify 

* Click Connect app button. Choose github as Git Provider and proceed to authorise the account. 
* Select the repository name from the dropdown and select dev brach.  Click next.
* Amplify automatically detects backed environment called “dev”. Choose dev environment when asked 


> Would you like Amplify Console to deploy changes to these resources with your frontend? 


Create a service role and give the necessary permission

Amplify has also detected the build file with name amplify.yml and framework as Angular-Amplify
Do not modify any advance setting and click next

Click save and deploy button


Now Your pipeline is ready for dev branch. Now when ever you make any code changes and do a push to dev branch, the build is triggered and latest application is available in the URL mentioned.

![amplifyConsole1](https://user-images.githubusercontent.com/5582133/67894812-595a0180-fb7f-11e9-98bb-b9ccfbb80113.png)

![amplifyConsole2](https://user-images.githubusercontent.com/5582133/67894813-595a0180-fb7f-11e9-958d-aa705e4d81dc.png)


Click on the application URL (similar to https://dev.xxxxxxxxxxxx.amplifyapp.com/) mentioned on the AWS amplify Console. 

Login page will be displayed as mentioned above. Once you log in, you will be displayed dashboard screen.

![app-screenshot1](https://user-images.githubusercontent.com/5582133/67894814-59f29800-fb7f-11e9-8a0e-40b64031d8ab.png)

You can now navigate using menu or click on the tasks. Click Weekly tasks button in dashboard and navigate to check what are all your weekly tasks for current week

![app-screenshot2](https://user-images.githubusercontent.com/5582133/67894815-59f29800-fb7f-11e9-87e0-ade821dc4e02.png)


Choose to mark the one of the task as complete. Also add/remove comments for a task




Conclusion : 
Using Amplify I can now create a secured application using congnito. Using appsync that uses  GraphQL I can  make it easy for applications to get exactly the data they need.  I also use  subscribe to new comments using subscription which is easy to consume.  



## License

This library is licensed under the MIT-0 License. See the LICENSE file.

