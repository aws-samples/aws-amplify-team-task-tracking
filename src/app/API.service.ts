/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateReminderInput = {
  id?: string | null;
  user: string;
  customer: string;
  start: string;
  month: number;
  week: number;
  year: number;
  additionalAttribute: string;
  type: frequency;
};

export type ModelMandatoryCommentFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  addedby?: ModelStringFilterInput | null;
  addedon?: ModelStringFilterInput | null;
  and?: Array<ModelMandatoryCommentFilterInput | null> | null;
  or?: Array<ModelMandatoryCommentFilterInput | null> | null;
  not?: ModelMandatoryCommentFilterInput | null;
};

export enum frequency {
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  YEARLY = "YEARLY",
  ADHOC = "ADHOC"
}

export type UpdateReminderInput = {
  id: string;
  user?: string | null;
  customer?: string | null;
  start?: string | null;
  month?: number | null;
  week?: number | null;
  year?: number | null;
  additionalAttribute?: string | null;
  type?: frequency | null;
};

export type DeleteReminderInput = {
  id?: string | null;
};

export type CreateTaskInput = {
  id?: string | null;
  title: string;
  description: string;
  status: boolean;
  taskReminderId?: string | null;
};

export type UpdateTaskInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: boolean | null;
  taskReminderId?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  content?: string | null;
  addedby?: string | null;
  addedon?: string | null;
  commentPostId?: string | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  commentPostId?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};


export type CreateMandatoryCommentInput = {
  id?: string | null;
  title?: string | null;
  content?: string | null;
  addedby?: string | null;
  addedon: string;
  mandatoryCommentTaskId?: string | null;
};

export type UpdateMandatoryCommentInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  addedby?: string | null;
  addedon?: string | null;
  mandatoryCommentTaskId?: string | null;
};

export type DeleteMandatoryCommentInput = {
  id?: string | null;
};

export type CreateCustomerInput = {
  id?: string | null;
  customername: string;
  user: string;
};

export type UpdateCustomerInput = {
  id: string;
  customername?: string | null;
  user?: string | null;
};

export type DeleteCustomerInput = {
  id?: string | null;
};

export type CreateReminderMetaDataInput = {
  id?: string | null;
  type: frequency;
};

export type UpdateReminderMetaDataInput = {
  id: string;
  type?: frequency | null;
};

export type DeleteReminderMetaDataInput = {
  id?: string | null;
};

export type CreateTaskMetaDataInput = {
  id?: string | null;
  title: string;
  description: string;
  taskMetaDataReminderId?: string | null;
};

export type UpdateTaskMetaDataInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  taskMetaDataReminderId?: string | null;
};

export type DeleteTaskMetaDataInput = {
  id?: string | null;
};

export type ModelReminderFilterInput = {
  id?: ModelIDFilterInput | null;
  user?: ModelStringFilterInput | null;
  customer?: ModelStringFilterInput | null;
  start?: ModelStringFilterInput | null;
  month?: ModelIntFilterInput | null;
  week?: ModelIntFilterInput | null;
  year?: ModelIntFilterInput | null;
  additionalAttribute?: ModelStringFilterInput | null;
  type?: ModelfrequencyFilterInput | null;
  and?: Array<ModelReminderFilterInput | null> | null;
  or?: Array<ModelReminderFilterInput | null> | null;
  not?: ModelReminderFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelfrequencyFilterInput = {
  eq?: frequency | null;
  ne?: frequency | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  status?: ModelBooleanFilterInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDFilterInput | null;
  customername?: ModelStringFilterInput | null;
  user?: ModelStringFilterInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelReminderMetaDataFilterInput = {
  id?: ModelIDFilterInput | null;
  type?: ModelfrequencyFilterInput | null;
  and?: Array<ModelReminderMetaDataFilterInput | null> | null;
  or?: Array<ModelReminderMetaDataFilterInput | null> | null;
  not?: ModelReminderMetaDataFilterInput | null;
};

export type ModelTaskMetaDataFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelTaskMetaDataFilterInput | null> | null;
  or?: Array<ModelTaskMetaDataFilterInput | null> | null;
  not?: ModelTaskMetaDataFilterInput | null;
};

export type CreateReminderMutation = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateReminderMutation = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteReminderMutation = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateMandatoryCommentMutation = {
  __typename: "MandatoryComment";
  id: string;
  title: string | null;
  content: string | null;
  addedby: string | null;
  addedon: string;
  task: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    mandatorycomment: {
      __typename: "ModelMandatoryCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateMandatoryCommentMutation = {
  __typename: "MandatoryComment";
  id: string;
  title: string | null;
  content: string | null;
  addedby: string | null;
  addedon: string;
  task: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    mandatorycomment: {
      __typename: "ModelMandatoryCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteMandatoryCommentMutation = {
  __typename: "MandatoryComment";
  id: string;
  title: string | null;
  content: string | null;
  addedby: string | null;
  addedon: string;
  task: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    mandatorycomment: {
      __typename: "ModelMandatoryCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type CreateReminderMetaDataMutation = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateReminderMetaDataMutation = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteReminderMetaDataMutation = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTaskMetaDataMutation = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateTaskMetaDataMutation = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteTaskMetaDataMutation = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetReminderQuery = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

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

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content: string | null;
    post: {
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    customername: string;
    user: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetReminderMetaDataQuery = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListReminderMetaDatasQuery = {
  __typename: "ModelReminderMetaDataConnection";
  items: Array<{
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      items: Array<{
        __typename: "TaskMetaData";
        id: string;
        title: string;
        description: string;
        mandatorycomments : {
          items: Array<{
            __typename : "MandatoryCommentMetaData"
            id: string;
            title: string;
          } | null> | null
        }
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type CreateMandatoryCommentMetaDataInput = {
  id?: string | null;
  title?: string | null;
  mandatoryCommentMetaDataTaskId?: string | null;
};

export type UpdateMandatoryCommentMetaDataInput = {
  id: string;
  title?: string | null;
  mandatoryCommentMetaDataTaskId?: string | null;
};

export type DeleteMandatoryCommentMetaDataInput = {
  id?: string | null;
};

export type GetTaskMetaDataQuery = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListTaskMetaDatasQuery = {
  __typename: "ModelTaskMetaDataConnection";
  items: Array<{
    __typename: "TaskMetaData";
    id: string;
    title: string;
    description: string;
    reminder: {
      __typename: "ReminderMetaData";
      id: string;
      type: frequency;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateReminderSubscription = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateReminderSubscription = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteReminderSubscription = {
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
    items: Array<{
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: boolean;
  reminder: {
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
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customername: string;
  user: string;
};

export type OnCreateReminderMetaDataSubscription = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateReminderMetaDataSubscription = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetMandatoryCommentQuery = {
  __typename: "MandatoryComment";
  id: string;
  title: string | null;
  content: string | null;
  addedby: string | null;
  addedon: string;
  task: {
    __typename: "Task";
    id: string;
    title: string;
    description: string;
    status: boolean;
    reminder: {
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
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    mandatorycomment: {
      __typename: "ModelMandatoryCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListMandatoryCommentsQuery = {
  __typename: "ModelMandatoryCommentConnection";
  items: Array<{
    __typename: "MandatoryComment";
    id: string;
    title: string | null;
    content: string | null;
    addedby: string | null;
    addedon: string;
    task: {
      __typename: "Task";
      id: string;
      title: string;
      description: string;
      status: boolean;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnDeleteReminderMetaDataSubscription = {
  __typename: "ReminderMetaData";
  id: string;
  type: frequency;
  tasks: {
    __typename: "ModelTaskMetaDataConnection";
    items: Array<{
      __typename: "TaskMetaData";
      id: string;
      title: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTaskMetaDataSubscription = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateTaskMetaDataSubscription = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteTaskMetaDataSubscription = {
  __typename: "TaskMetaData";
  id: string;
  title: string;
  description: string;
  reminder: {
    __typename: "ReminderMetaData";
    id: string;
    type: frequency;
    tasks: {
      __typename: "ModelTaskMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateMandatoryCommentMetaDataMutation = {
  __typename: "MandatoryCommentMetaData";
  id: string;
  title: string | null;
  task: {
    __typename: "TaskMetaData";
    id: string;
    title: string;
    description: string;
    reminder: {
      __typename: "ReminderMetaData";
      id: string;
      type: frequency;
    } | null;
    mandatorycomments: {
      __typename: "ModelMandatoryCommentMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateMandatoryCommentMetaDataMutation = {
  __typename: "MandatoryCommentMetaData";
  id: string;
  title: string | null;
  task: {
    __typename: "TaskMetaData";
    id: string;
    title: string;
    description: string;
    reminder: {
      __typename: "ReminderMetaData";
      id: string;
      type: frequency;
    } | null;
    mandatorycomments: {
      __typename: "ModelMandatoryCommentMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteMandatoryCommentMetaDataMutation = {
  __typename: "MandatoryCommentMetaData";
  id: string;
  title: string | null;
  task: {
    __typename: "TaskMetaData";
    id: string;
    title: string;
    description: string;
    reminder: {
      __typename: "ReminderMetaData";
      id: string;
      type: frequency;
    } | null;
    mandatorycomments: {
      __typename: "ModelMandatoryCommentMetaDataConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateReminder(
    input: CreateReminderInput
  ): Promise<CreateReminderMutation> {
    const statement = `mutation CreateReminder($input: CreateReminderInput!) {
        createReminder(input: $input) {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReminderMutation>response.data.createReminder;
  }
  async UpdateReminder(
    input: UpdateReminderInput
  ): Promise<UpdateReminderMutation> {
    const statement = `mutation UpdateReminder($input: UpdateReminderInput!) {
        updateReminder(input: $input) {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReminderMutation>response.data.updateReminder;
  }
  async DeleteReminder(
    input: DeleteReminderInput
  ): Promise<DeleteReminderMutation> {
    const statement = `mutation DeleteReminder($input: DeleteReminderInput!) {
        deleteReminder(input: $input) {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReminderMutation>response.data.deleteReminder;
  }
  async CreateTask(input: CreateTaskInput): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!) {
        createTask(input: $input) {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(input: UpdateTaskInput): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!) {
        updateTask(input: $input) {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(input: DeleteTaskInput): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!) {
        deleteTask(input: $input) {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreateComment(
    input: CreateCommentInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
          __typename
          id
          content
          addedby
          addedon
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!) {
        updateComment(input: $input) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!) {
        deleteComment(input: $input) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }

  async CreateMandatoryComment(
    input: CreateMandatoryCommentInput
  ): Promise<CreateMandatoryCommentMutation> {
    const statement = `mutation CreateMandatoryComment($input: CreateMandatoryCommentInput!) {
        createMandatoryComment(input: $input) {
          __typename
          id
          title
          content
          addedby
          addedon
          task {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
            mandatorycomment {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMandatoryCommentMutation>response.data.createMandatoryComment;
  }
  async UpdateMandatoryComment(
    input: UpdateMandatoryCommentInput
  ): Promise<UpdateMandatoryCommentMutation> {
    const statement = `mutation UpdateMandatoryComment($input: UpdateMandatoryCommentInput!) {
        updateMandatoryComment(input: $input) {
          __typename
          id
          title
          content
          addedby
          addedon
          task {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
            mandatorycomment {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMandatoryCommentMutation>response.data.updateMandatoryComment;
  }
  async DeleteMandatoryComment(
    input: DeleteMandatoryCommentInput
  ): Promise<DeleteMandatoryCommentMutation> {
    const statement = `mutation DeleteMandatoryComment($input: DeleteMandatoryCommentInput!) {
        deleteMandatoryComment(input: $input) {
          __typename
          id
          title
          content
          addedby
          addedon
          task {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
            mandatorycomment {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMandatoryCommentMutation>response.data.deleteMandatoryComment;
  }


  async CreateCustomer(
    input: CreateCustomerInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
          __typename
          id
          customername
          user
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
          __typename
          id
          customername
          user
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
        deleteCustomer(input: $input) {
          __typename
          id
          customername
          user
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateReminderMetaData(
    input: CreateReminderMetaDataInput
  ): Promise<CreateReminderMetaDataMutation> {
    const statement = `mutation CreateReminderMetaData($input: CreateReminderMetaDataInput!) {
        createReminderMetaData(input: $input) {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReminderMetaDataMutation>response.data.createReminderMetaData;
  }
  async UpdateReminderMetaData(
    input: UpdateReminderMetaDataInput
  ): Promise<UpdateReminderMetaDataMutation> {
    const statement = `mutation UpdateReminderMetaData($input: UpdateReminderMetaDataInput!) {
        updateReminderMetaData(input: $input) {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReminderMetaDataMutation>response.data.updateReminderMetaData;
  }
  async DeleteReminderMetaData(
    input: DeleteReminderMetaDataInput
  ): Promise<DeleteReminderMetaDataMutation> {
    const statement = `mutation DeleteReminderMetaData($input: DeleteReminderMetaDataInput!) {
        deleteReminderMetaData(input: $input) {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReminderMetaDataMutation>response.data.deleteReminderMetaData;
  }
  async CreateTaskMetaData(
    input: CreateTaskMetaDataInput
  ): Promise<CreateTaskMetaDataMutation> {
    const statement = `mutation CreateTaskMetaData($input: CreateTaskMetaDataInput!) {
        createTaskMetaData(input: $input) {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMetaDataMutation>response.data.createTaskMetaData;
  }
  async UpdateTaskMetaData(
    input: UpdateTaskMetaDataInput
  ): Promise<UpdateTaskMetaDataMutation> {
    const statement = `mutation UpdateTaskMetaData($input: UpdateTaskMetaDataInput!) {
        updateTaskMetaData(input: $input) {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMetaDataMutation>response.data.updateTaskMetaData;
  }
  async DeleteTaskMetaData(
    input: DeleteTaskMetaDataInput
  ): Promise<DeleteTaskMetaDataMutation> {
    const statement = `mutation DeleteTaskMetaData($input: DeleteTaskMetaDataInput!) {
        deleteTaskMetaData(input: $input) {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMetaDataMutation>response.data.deleteTaskMetaData;
  }
  async GetReminder(id: string): Promise<GetReminderQuery> {
    const statement = `query GetReminder($id: ID!) {
        getReminder(id: $id) {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReminderQuery>response.data.getReminder;
  }
  async ListReminders(
    filter?: ModelReminderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRemindersQuery> {
    const statement = `query ListReminders($filter: ModelReminderFilterInput, $limit: Int, $nextToken: String) {
        listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              items {
                __typename
                id
                title
                description
                status
                comments {
                  __typename
                  items {
                    id
                    content
                    addedby
                    addedon
                  }
                  nextToken
                }
                mandatorycomment {
                  __typename
                  items {
                    id
                    title
                    content
                  }
                  nextToken
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRemindersQuery>response.data.listReminders;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            post {
              __typename
              id
              title
              description
              status
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          __typename
          id
          customername
          user
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
        listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            customername
            user
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async GetReminderMetaData(id: string): Promise<GetReminderMetaDataQuery> {
    const statement = `query GetReminderMetaData($id: ID!) {
        getReminderMetaData(id: $id) {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReminderMetaDataQuery>response.data.getReminderMetaData;
  }
  async ListReminderMetaDatas(
    filter?: ModelReminderMetaDataFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReminderMetaDatasQuery> {
    const statement = `query ListReminderMetaDatas($filter: ModelReminderMetaDataFilterInput, $limit: Int, $nextToken: String) {
        listReminderMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            tasks {
              __typename
              items {
                __typename
                id
                title
                description
                mandatorycomments {
                  __typename
                  items {
                    id 
                    title
                  }
                }
              }
            nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReminderMetaDatasQuery>response.data.listReminderMetaDatas;
  }
  async GetTaskMetaData(id: string): Promise<GetTaskMetaDataQuery> {
    const statement = `query GetTaskMetaData($id: ID!) {
        getTaskMetaData(id: $id) {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskMetaDataQuery>response.data.getTaskMetaData;
  }
  async ListTaskMetaDatas(
    filter?: ModelTaskMetaDataFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTaskMetaDatasQuery> {
    const statement = `query ListTaskMetaDatas($filter: ModelTaskMetaDataFilterInput, $limit: Int, $nextToken: String) {
        listTaskMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            reminder {
              __typename
              id
              type
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTaskMetaDatasQuery>response.data.listTaskMetaDatas;
  }
  async CreateMandatoryCommentMetaData(
    input: CreateMandatoryCommentMetaDataInput
  ): Promise<CreateMandatoryCommentMetaDataMutation> {
    const statement = `mutation CreateMandatoryCommentMetaData($input: CreateMandatoryCommentMetaDataInput!) {
        createMandatoryCommentMetaData(input: $input) {
          __typename
          id
          title
          task {
            __typename
            id
            title
            description
            reminder {
              __typename
              id
              type
            }
            mandatorycomments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMandatoryCommentMetaDataMutation>(
      response.data.createMandatoryCommentMetaData
    );
  }
  async UpdateMandatoryCommentMetaData(
    input: UpdateMandatoryCommentMetaDataInput
  ): Promise<UpdateMandatoryCommentMetaDataMutation> {
    const statement = `mutation UpdateMandatoryCommentMetaData($input: UpdateMandatoryCommentMetaDataInput!) {
        updateMandatoryCommentMetaData(input: $input) {
          __typename
          id
          title
          task {
            __typename
            id
            title
            description
            reminder {
              __typename
              id
              type
            }
            mandatorycomments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMandatoryCommentMetaDataMutation>(
      response.data.updateMandatoryCommentMetaData
    );
  }
  async DeleteMandatoryCommentMetaData(
    input: DeleteMandatoryCommentMetaDataInput
  ): Promise<DeleteMandatoryCommentMetaDataMutation> {
    const statement = `mutation DeleteMandatoryCommentMetaData($input: DeleteMandatoryCommentMetaDataInput!) {
        deleteMandatoryCommentMetaData(input: $input) {
          __typename
          id
          title
          task {
            __typename
            id
            title
            description
            reminder {
              __typename
              id
              type
            }
            mandatorycomments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMandatoryCommentMetaDataMutation>(
      response.data.deleteMandatoryCommentMetaData
    );
  }

  async GetMandatoryComment(id: string): Promise<GetMandatoryCommentQuery> {
    const statement = `query GetMandatoryComment($id: ID!) {
        getMandatoryComment(id: $id) {
          __typename
          id
          title
          content
          addedby
          addedon
          task {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
            mandatorycomment {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMandatoryCommentQuery>response.data.getMandatoryComment;
  }
  async ListMandatoryComments(
    filter?: ModelMandatoryCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMandatoryCommentsQuery> {
    const statement = `query ListMandatoryComments($filter: ModelMandatoryCommentFilterInput, $limit: Int, $nextToken: String) {
        listMandatoryComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            addedby
            addedon
            task {
              __typename
              id
              title
              description
              status
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMandatoryCommentsQuery>response.data.listMandatoryComments;
  }



  OnCreateReminderListener: Observable<
    OnCreateReminderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReminder {
        onCreateReminder {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateReminderSubscription>;

  OnUpdateReminderListener: Observable<
    OnUpdateReminderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReminder {
        onUpdateReminder {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateReminderSubscription>;

  OnDeleteReminderListener: Observable<
    OnDeleteReminderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReminder {
        onDeleteReminder {
          __typename
          id
          user
          customer
          start
          month
          week
          year
          additionalAttribute
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
              status
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteReminderSubscription>;

  OnCreateTaskListener: Observable<OnCreateTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateTaskSubscription>;

  OnUpdateTaskListener: Observable<OnUpdateTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateTaskSubscription>;

  OnDeleteTaskListener: Observable<OnDeleteTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          title
          description
          status
          reminder {
            __typename
            id
            user
            customer
            start
            month
            week
            year
            additionalAttribute
            type
            tasks {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteTaskSubscription>;

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          content
          addedon
          addedby
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            status
            reminder {
              __typename
              id
              user
              customer
              start
              month
              week
              year
              additionalAttribute
              type
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;

  OnCreateCustomerListener: Observable<
    OnCreateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          id
          customername
          user
        }
      }`
    )
  ) as Observable<OnCreateCustomerSubscription>;

  OnUpdateCustomerListener: Observable<
    OnUpdateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          id
          customername
          user
        }
      }`
    )
  ) as Observable<OnUpdateCustomerSubscription>;

  OnDeleteCustomerListener: Observable<
    OnDeleteCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          id
          customername
          user
        }
      }`
    )
  ) as Observable<OnDeleteCustomerSubscription>;

  OnCreateReminderMetaDataListener: Observable<
    OnCreateReminderMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReminderMetaData {
        onCreateReminderMetaData {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateReminderMetaDataSubscription>;

  OnUpdateReminderMetaDataListener: Observable<
    OnUpdateReminderMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReminderMetaData {
        onUpdateReminderMetaData {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateReminderMetaDataSubscription>;

  OnDeleteReminderMetaDataListener: Observable<
    OnDeleteReminderMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReminderMetaData {
        onDeleteReminderMetaData {
          __typename
          id
          type
          tasks {
            __typename
            items {
              __typename
              id
              title
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteReminderMetaDataSubscription>;

  OnCreateTaskMetaDataListener: Observable<
    OnCreateTaskMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTaskMetaData {
        onCreateTaskMetaData {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateTaskMetaDataSubscription>;

  OnUpdateTaskMetaDataListener: Observable<
    OnUpdateTaskMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTaskMetaData {
        onUpdateTaskMetaData {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateTaskMetaDataSubscription>;

  OnDeleteTaskMetaDataListener: Observable<
    OnDeleteTaskMetaDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTaskMetaData {
        onDeleteTaskMetaData {
          __typename
          id
          title
          description
          reminder {
            __typename
            id
            type
            tasks {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteTaskMetaDataSubscription>;
}
