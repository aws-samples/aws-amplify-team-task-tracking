import { Component, OnInit } from '@angular/core';
import { APIService ,frequency} from '../API.service';
const uuidv4 = require('uuid/v4');
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as moment from 'moment';

@Component({
  selector: 'app-monthlytasks',
  templateUrl: './monthlytasks.component.html',
  styleUrls: ['./monthlytasks.component.css']
})
export class MonthlytasksComponent implements OnInit {

  public allReminders;
  public week;
  public year;
  public day;
  public month;
  public current;
  public displayDate;
  public show = false;
  constructor(private api: APIService, private router: Router,  private appcomponent: AppComponent) {
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
        eq: frequency.MONTHLY
      },
      month: {
        eq: this.month
      }


    });
    this.allReminders = response.items;
    console.log(this.allReminders);


  }


  async onClickMe(taskid: string, currstatus: boolean) {
    await this.api.UpdateTask({
      id: taskid,
      status: !currstatus
    });
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
  }

  async displayPrevious() {
    this.current = this.current.subtract(1, 'month');
    this.displayDate = this.current.format('DD  MMM  YYYY');
    this.month = this.month - 1;
    const response = await this.api.ListReminders({
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
    this.allReminders = response.items;
    console.log(this.allReminders);
  }

  async displayNext() {
    this.current = this.current.add(1, 'month');
    this.displayDate = this.current.format('DD  MMM  YYYY');
    this.month = this.month + 1;
    const response = await this.api.ListReminders({
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
      //console.log('while refreshing ', this.month);
      if (this.month != undefined) {
        const response = await this.api.ListReminders({
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
        this.allReminders = response.items;
      }
    });

    this.api.OnDeleteCommentListener.subscribe(async (comment) => {
      //console.log('new comment', comment);
      console.log('while refreshing ', this.month);
      if (this.month != undefined) {
        const response = await this.api.ListReminders({
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
