import { Component, OnInit } from '@angular/core';

import { APIService,frequency } from '../API.service';
import { Router } from '@angular/router';
const uuidv4 = require('uuid/v4');
import { AppComponent } from '../app.component';
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/*
Dashboard will display data for current month and current week
*/
export class DashboardComponent implements OnInit {


  public dashboardWeeklyData;
  public dashboardMonthlyData;
  public dashboardYearlyData;
  public allReminders;
  public week;
  public year;
  public day;
  public month;
  public current;
  public displayDate;
  private result;
  public dashboardMap;
  constructor(private api: APIService,  private router: Router, private appcomponent: AppComponent) {
    this.onNewReminders();
  }

  async ngOnInit() {

    // // TODO : Add loggedin user filter
    // // TODO : add filter for current week and month

    this.week = moment().format('WW');
    this.month = moment().format('MM');
    this.year = moment().format('gggg');

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

    const monthlyresponse = await this.api.ListReminders({
      user: {
        eq: this.appcomponent.user.attributes.email
      },
      type: {
        eq: frequency.MONTHLY
      },
      month: {
        eq: this.month
      }
    });

    const yearlyresponse = await this.api.ListReminders({
      user: {
        eq: this.appcomponent.user.attributes.email
      },
      type: {
        eq: frequency.YEARLY
      },
      year: {
        eq: this.year
      }

    });

    this.dashboardMonthlyData = monthlyresponse.items;
    this.dashboardWeeklyData = weeklyresponse.items;
    this.dashboardYearlyData = yearlyresponse.items;

    if (this.dashboardMonthlyData.length == 0) {
      await this.populateMissingReminders(frequency.MONTHLY);

    }
    if (this.dashboardWeeklyData.length == 0) {
      await this.populateMissingReminders(frequency.WEEKLY);

    }
    // todo : populate the TAM Goals without customer
    console.log('Tam goal length', this.dashboardYearlyData.length);
    if (this.dashboardYearlyData.length == 0) {
      await this.populateTamGoals(frequency.YEARLY);

    }



  }


  createDashboardMap(dashboardWeeklyData: any, dashboardMonthlyData: any, dashboardYearlyData) {
    //console.log(dashboardMonthlyData);
    const customerTaskMap = new Map();
    dashboardMonthlyData.forEach(element => {
      //console.log(element.customer);
      const existingTasks = customerTaskMap.get(element.customer);
      //console.log(existingTasks);
      if (existingTasks == undefined) {
        console.log('need to add to customer map', element.tasks.items);
        customerTaskMap.set(element.customer, element.tasks.items);
      } else {
        existingTasks.push.apply(existingTasks, element.tasks.items);
        customerTaskMap.set(element.customer, existingTasks);

      }
    });

    dashboardWeeklyData.forEach(element => {
      //console.log(element.customer);
      const existingTasks = customerTaskMap.get(element.customer);
      //console.log(existingTasks);
      if (existingTasks == undefined) {
        console.log('need to add to customer map', element.tasks.items);
        customerTaskMap.set(element.customer, element.tasks.items);
      } else {
        console.log('pushing data', existingTasks, element.tasks.items);
        existingTasks.push.apply(existingTasks, element.tasks.items);
        customerTaskMap.set(element.customer, existingTasks);
      }
    });

    dashboardYearlyData.forEach(element => {
      //console.log(element.customer);
      const existingTasks = customerTaskMap.get(element.customer);
      //console.log(existingTasks);
      if (existingTasks == undefined) {
        console.log('need to add to customer map', element.tasks.items);
        customerTaskMap.set(element.customer, element.tasks.items);
      } else {
        console.log('pushing data', existingTasks, element.tasks.items);
        existingTasks.push.apply(existingTasks, element.tasks.items);
        customerTaskMap.set(element.customer, existingTasks);
      }
    });



    console.log(customerTaskMap);
    return customerTaskMap;

  }

  async populateTamGoals(YEARLY: frequency) {


    const reminderMetaData = await this.api.ListReminderMetaDatas({
      type: {
        eq: YEARLY
      }
    });
    console.log('reminderMetaData', reminderMetaData);
    //now populate the reminders as no customer
    reminderMetaData.items.forEach(async (remindervalue, index) => {
      const reminderuuid = uuidv4();
      console.log('creating')
      await this.api.CreateReminder({
        id: reminderuuid,
        additionalAttribute: 'Not Used',
        customer: 'Team Goals',
        user: this.appcomponent.user.attributes.email,
        start: new Date().toISOString(),
        type: remindervalue.type,
        year: this.year,
        month: 0,
        week: 0
      });

      remindervalue.tasks.items.forEach(async (taskvalue, index) => {
        //console.log('Creating task for  reminder', taskvalue, remindervalue);
        const taskid = uuidv4();
        // todo : Create tasks here and attach to the reminders
        await this.api.CreateTask({
          description: taskvalue.description,
          status: false,
          id: taskid,
          taskReminderId: reminderuuid,
          title: taskvalue.title
        });
        // task create ends here

        // for each task , check if there are any mandatory comments
        //console.log('Need to add if there are any mandatory comment',taskvalue);
        taskvalue.mandatorycomments.items.forEach(async (mandatorycommentvalue, index) => {
          const mandatorycommentid = uuidv4();
          console.log('create mandatory comments for ', mandatorycommentid);

          await this.api.CreateMandatoryComment({
            mandatoryCommentTaskId: taskid,
            title: mandatorycommentvalue.title,
            id: mandatorycommentid,
            addedon: new Date().toISOString()
          });
        });
        // end code to add mandatory comments

      });


    });
  }

  async populateMissingReminders(frequency) {


    // code here to populate the user's customer's reminder for the month
    const eligibleCustomer = await this.api.ListCustomers({
      user: {
        eq: this.appcomponent.user.attributes.email
      }
    });
    // for all the avalable customer assigned to the user, populate reminders for month selected
    //console.log('customer', eligibleCustomer.items);

    eligibleCustomer.items.forEach(async (customervalue, index) => {
      // for all the customers add the reminder items
      const reminderMetaData = await this.api.ListReminderMetaDatas({
        type: {
          eq: frequency
        }
      });
      //console.log('populating reminders', reminderMetaData);
      //const reminderuuid = uuidv4();
      reminderMetaData.items.forEach(async (remindervalue, index) => {
        console.log('Creting reminders for customer', customervalue, remindervalue);
        // todo : create reminder here
        const reminderuuid = uuidv4();
        await this.api.CreateReminder({
          id: reminderuuid,
          customer: customervalue.customername,
          additionalAttribute: 'Not Used',
          user: customervalue.user,
          start: new Date().toISOString(),
          type: remindervalue.type,
          week: this.week,
          month: this.month,
          year: this.year
        });

        // reminder create ends here
        remindervalue.tasks.items.forEach(async (taskvalue, index) => {
          //console.log('Creating task for  reminder', taskvalue, remindervalue);
          const taskid = uuidv4();
          // todo : Create tasks here and attach to the reminders
          await this.api.CreateTask({
            description: taskvalue.description,
            status: false,
            id: taskid,
            taskReminderId: reminderuuid,
            title: taskvalue.title
          });
          // task create ends here

          // for each task , check if there are any mandatory comments
          //console.log('Need to add if there are any mandatory comment',taskvalue);
          taskvalue.mandatorycomments.items.forEach(async (mandatorycommentvalue, index) => {
            const mandatorycommentid = uuidv4();
            console.log('create mandatory comments for ', mandatorycommentid);

            await this.api.CreateMandatoryComment({
              mandatoryCommentTaskId: taskid,
              title: mandatorycommentvalue.title,
              id: mandatorycommentid,
              addedon: new Date().toISOString()
            });
          });
          // end code to add mandatory comments
        });

      });
    });
  }

  onNewReminders() {
    this.api.OnCreateTaskListener.subscribe(async (reminder) => {
      //console.log('new comment', comment);
      console.log('while refreshing ', this.month);
      if (this.month != undefined) {
        const monthlyupdatedresponse = await this.api.ListReminders({
          user: {
            eq: this.appcomponent.user.attributes.email
          },
          type: {
            eq: frequency.MONTHLY
          },
          month: {
            eq: this.month
          }
        });

        this.dashboardMonthlyData = monthlyupdatedresponse.items;
        const weeklyupdatedresponse = await this.api.ListReminders({
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
        this.dashboardWeeklyData = weeklyupdatedresponse.items;


        const yearlyupdatedresponse = await this.api.ListReminders({
          user: {
            eq: this.appcomponent.user.attributes.email
          },
          type: {
            eq: frequency.YEARLY
          },
          year: {
            eq: this.year
          }

        });
        this.dashboardYearlyData = yearlyupdatedresponse.items;

      }
    });
  }

}
