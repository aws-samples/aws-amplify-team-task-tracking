# LAB2 : Adding Amplify resources


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




A new file will be created with name aws-exports.js
This is a dynamically generated file which has the configuration to ensure the javascript angular module can communicate with the API we will be developing.

Since we are developing a TS project , we might need to copy the aws-exports.js and create a new file with name aws-exports.ts. We need to do this everytime we create/update/delete an serverside resource. You will automate this at later stage.



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


You can see a folder named Amplify. This is the folder which is managed by amplify tool which dynamically generates a cloudfromation template and updates it based on the resouces added via Amplify CLI

Once the operation is complete,  copy the content from  aws-export.js to aws-export.ts. We will automate this step in coming section.


In the subsequent sections, you will write the functional logic and consume the amplify API.

[Proceed to Lab 3](LAB3.md)
