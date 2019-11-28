# 3. LAB3 : Adding application logic  

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
