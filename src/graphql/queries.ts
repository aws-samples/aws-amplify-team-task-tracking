// tslint:disable
// this is an auto generated file. This will be overwritten

export const getReminder = `query GetReminder($id: ID!) {
  getReminder(id: $id) {
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
      items {
        id
        title
        description
        status
      }
      nextToken
    }
  }
}
`;
export const listReminders = `query ListReminders(
  $filter: ModelReminderFilterInput
  $limit: Int
  $nextToken: String
) {
  listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
    reminder {
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
        nextToken
      }
    }
    comments {
      items {
        id
        content
        addedby
        addedon
      }
      nextToken
    }
    mandatorycomment {
      items {
        id
        title
        content
        addedby
        addedon
      }
      nextToken
    }
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
      reminder {
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
        nextToken
      }
      mandatorycomment {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    addedby
    addedon
    post {
      id
      title
      description
      status
      reminder {
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
        nextToken
      }
      mandatorycomment {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      addedby
      addedon
      post {
        id
        title
        description
        status
      }
    }
    nextToken
  }
}
`;
export const getMandatoryComment = `query GetMandatoryComment($id: ID!) {
  getMandatoryComment(id: $id) {
    id
    title
    content
    addedby
    addedon
    task {
      id
      title
      description
      status
      reminder {
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
        nextToken
      }
      mandatorycomment {
        nextToken
      }
    }
  }
}
`;
export const listMandatoryComments = `query ListMandatoryComments(
  $filter: ModelMandatoryCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMandatoryComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      addedby
      addedon
      task {
        id
        title
        description
        status
      }
    }
    nextToken
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customername
      user
      groupsCanAccess
    }
    nextToken
  }
}
`;
export const getReminderMetaData = `query GetReminderMetaData($id: ID!) {
  getReminderMetaData(id: $id) {
    id
    type
    tasks {
      items {
        id
        title
        description
        groupsCanAccess
      }
      nextToken
    }
    groupsCanAccess
  }
}
`;
export const listReminderMetaDatas = `query ListReminderMetaDatas(
  $filter: ModelReminderMetaDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listReminderMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      tasks {
        nextToken
      }
      groupsCanAccess
    }
    nextToken
  }
}
`;
export const getTaskMetaData = `query GetTaskMetaData($id: ID!) {
  getTaskMetaData(id: $id) {
    id
    title
    description
    reminder {
      id
      type
      tasks {
        nextToken
      }
      groupsCanAccess
    }
    mandatorycomments {
      items {
        id
        title
        groupsCanAccess
      }
      nextToken
    }
    groupsCanAccess
  }
}
`;
export const listTaskMetaDatas = `query ListTaskMetaDatas(
  $filter: ModelTaskMetaDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaskMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      reminder {
        id
        type
        groupsCanAccess
      }
      mandatorycomments {
        nextToken
      }
      groupsCanAccess
    }
    nextToken
  }
}
`;
export const getMandatoryCommentMetaData = `query GetMandatoryCommentMetaData($id: ID!) {
  getMandatoryCommentMetaData(id: $id) {
    id
    title
    task {
      id
      title
      description
      reminder {
        id
        type
        groupsCanAccess
      }
      mandatorycomments {
        nextToken
      }
      groupsCanAccess
    }
    groupsCanAccess
  }
}
`;
export const listMandatoryCommentMetaDatas = `query ListMandatoryCommentMetaDatas(
  $filter: ModelMandatoryCommentMetaDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listMandatoryCommentMetaDatas(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      task {
        id
        title
        description
        groupsCanAccess
      }
      groupsCanAccess
    }
    nextToken
  }
}
`;
