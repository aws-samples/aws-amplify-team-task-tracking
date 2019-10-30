import { Component, OnInit } from '@angular/core';
import { APIService, frequency } from '../API.service';
const uuidv4 = require('uuid/v4');
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as moment from 'moment';

@Component({
  selector: 'app-weeklytasks',
  templateUrl: './weeklytasks.component.html',
  styleUrls: ['./weeklytasks.component.css']
})
export class WeeklytasksComponent implements OnInit {
  public allReminders;
  public week;
  public year;
  public day;
  public month;
  public current;
  public displayDate;
  constructor(private api: APIService, private router: Router, private appcomponent: AppComponent) {
    this.commentAction();

  }

  async ngOnInit() {
   
    const currentWeek = moment().format('WW');
    const currentYear = moment().format('gggg');
    const currentMonth = moment().format('MM');
    const currDay = moment().format('DD');
    this.week = parseInt(currentWeek);
    this.year = parseInt(currentYear);
    this.month = parseInt(currentMonth);
    this.day = parseInt(currDay);
    this.current = moment();
    this.displayDate = this.current.format("DD  MMM  YYYY");
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
    console.log(this.allReminders);


    /*const reminderid = uuidv4();
    const taskid1 = uuidv4();
    const taskid2 = uuidv4();
    const comment1 = uuidv4();
    const comment2 = uuidv4();
    console.log('Date : ',currentWeek,currentMonth,currentYear );
    await this.api.CreateReminder({
      id: reminderid,
      customer: 'D11',
      user: 'sankerau@amazon.com',
      type: frequency.WEEKLY,
      start: new Date().toISOString(),
      additionalAttribute: ' ',
      month: parseInt(currentMonth),
      week: parseInt(currentWeek),
      year: parseInt(currentYear)

    });
    await this.api.CreateTask({
      description: 'Send out Weekly emails',
      status: false,
      id: taskid1,
      taskReminderId: reminderid,
      title: 'Weekly Emails'
    });
    await this.api.CreateTask({
      description: 'Weekly Account Sync',
      status: false,
      id: taskid2,
      taskReminderId: reminderid,
      title: 'Account Sync'

    });

    await this.api.CreateComment({
      id: comment1,
      content: 'This is a new comment',
      commentPostId:  taskid1

    });

    await this.api.CreateComment({
      id: comment2,
      content: 'This is a new comment',
      commentPostId:  taskid2

    });*/

  }

  async onClickMe(taskid: string, currstatus: boolean) {
    //console.log('task' , taskid , 'marking as' + !currstatus)
    await this.api.UpdateTask({
      id: taskid,
      status: !currstatus
    });
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
  }

  async displayPrevious() {
    this.current = this.current.subtract(1, 'week');
    this.displayDate = this.current.format('DD  MMM  YYYY');
    this.week = this.week - 1;
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
    console.log(this.allReminders);
  }

  async displayNext() {
    this.current = this.current.add(1, 'week');
    this.displayDate = this.current.format('DD  MMM  YYYY');
    this.week = this.week + 1;
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
    console.log(this.allReminders);
  }

  async addComment(taskid: string, userText: string) {
    await this.api.CreateComment({
      commentPostId: taskid,
      content: userText,
      addedby: this.appcomponent.user.attributes.email,
      addedon: new Date().toISOString()
    });
  }

  async removeComent(commentid: string) {
    await this.api.DeleteComment({
      id: commentid
    });
  }

  commentAction() {
    //throw new Error("Method not implemented.");
    this.api.OnCreateCommentListener.subscribe(async (comment) => {
      //console.log('new comment', comment);
      console.log('while refreshing ', this.month);
      if (this.week != undefined) {
        const response = await this.api.ListReminders({
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
        this.allReminders = response.items;
      }
    });

    this.api.OnDeleteCommentListener.subscribe(async (comment) => {
      //console.log('new comment', comment);
      console.log('while refreshing ', this.month);
      if (this.week != undefined) {
        const response = await this.api.ListReminders({
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
        this.allReminders = response.items;
      }
    });
  }

  async addMandatoryComment(mandatorycommentID: string, userText: string) {
    console.log(mandatorycommentID, userText);
    await this.api.UpdateMandatoryComment({
      id: mandatorycommentID,
      content: userText
    });

  }
}
