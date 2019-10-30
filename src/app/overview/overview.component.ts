import { Component, OnInit } from '@angular/core';
import { APIService, frequency } from '../API.service';
const uuidv4 = require('uuid/v4');
import * as moment from 'moment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public allReminders;
  public week;
  public year;
  public day;
  public month;
  public current;
  constructor(private api: APIService) { }
  public dashboardMap;
  async ngOnInit() {
    this.week = moment().format('WW');
    this.month = moment().format('MM');
    const weeklyReminders = await this.api.ListReminders({
      week: {
        eq: this.week
      },
      type: {
        eq: frequency.WEEKLY
      }
    });
    const monthlyReminders = await this.api.ListReminders({
      month: {
        eq: this.month
      },
      type: {
        eq: frequency.MONTHLY
      }
    });

    //console.log(allreminders.items);
    /*const customerTaskMap = new Map();
    const reminderData = allreminders.items
    reminderData.forEach(element => {
      //console.log(element.tasks.items);
      const existingTasks = customerTaskMap.get(element.customer);
      //console.log(existingTasks);
      if (existingTasks == undefined) {
        //console.log('need to add to customer map', element.tasks.items);
        customerTaskMap.set(element.customer, element.tasks.items);
      } else {
        existingTasks.push.apply(existingTasks, element.tasks.items);
        customerTaskMap.set(element.customer, existingTasks);

      }
    });
    this.dashboardMap = customerTaskMap;*/
    this.dashboardMap = this.createDashboardMap(weeklyReminders.items, monthlyReminders.items);
  }



  createDashboardMap(dashboardWeeklyData: any, dashboardMonthlyData: any) {
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
    console.log(customerTaskMap);
    return customerTaskMap;

  }

}
