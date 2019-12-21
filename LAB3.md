# 3. LAB3 : Adding application logic  

 Update the app.component.ts as following. Following code is written to redirect to /dashboard route post login


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

Add a if condition to  show menu when the user  logs in

```
<nav class="navbar navbar-expand-lg navbar-light bg-light" *ngIf=loggedinuser>
```

Do not forget to copy the content from aws-export.js to aws-export.ts 

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

The above meta schema is present in the file [reminder.json](reminder.json)
It creates meta data for reminders (Weekly , monthly and yearly)

Similarly add data from following files in respective tables mentioned below.

* Populate TaskMetaData-xxxxxxxx-dev table using json from file [tasks.json](tasks.json). This will populate meta data to create tasks for monthly, weekly, yearly reminders
* Populate MandatoryCommentMetaData-xxxxxxx-dev table using json from file [mandatorycomments.json](mandatorycomments.json). This will populate meta data for tasks which have mandatory comments 
* Map users who have registered to customer/group by adding data in Customer-xxxxxx-dev table [customer.json](customer.json). 




Create two groups in cognito console and assign either Admin or User or both group to the registered user. 

Click [here](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-user-groups.html) to learn how to create group in cognito

Click [here](https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html)  to know how to assign groups to user 



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

Currently, the newest versions of Angular (6+) do not include shims for ‘global’ or ‘process’ which were provided in previous versions. Add the following to your polyfills.ts file to recreate them ![Doc](https://aws-amplify.github.io/docs/js/angular)


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

[Proceed to Lab 4](LAB4.md)
