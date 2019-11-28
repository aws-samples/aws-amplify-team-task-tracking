# 4. LAB4 : Create CI/CD Pipelines

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
Using Amplify you can now create a secured application completely running in serverless technologies. Using appsync that uses  GraphQL you can  make it easy for web/mobile client to get the data they need via graphql query.  You also learnt to use  subscription to listen for changes on data
