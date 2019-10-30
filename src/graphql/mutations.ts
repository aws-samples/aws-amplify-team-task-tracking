// tslint:disable
// this is an auto generated file. This will be overwritten

export const createReminder = `mutation CreateReminder($input: CreateReminderInput!) {
  createReminder(input: $input) {
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
export const updateReminder = `mutation UpdateReminder($input: UpdateReminderInput!) {
  updateReminder(input: $input) {
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
export const deleteReminder = `mutation DeleteReminder($input: DeleteReminderInput!) {
  deleteReminder(input: $input) {
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
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
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
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
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
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createMandatoryComment = `mutation CreateMandatoryComment($input: CreateMandatoryCommentInput!) {
  createMandatoryComment(input: $input) {
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
export const updateMandatoryComment = `mutation UpdateMandatoryComment($input: UpdateMandatoryCommentInput!) {
  updateMandatoryComment(input: $input) {
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
export const deleteMandatoryComment = `mutation DeleteMandatoryComment($input: DeleteMandatoryCommentInput!) {
  deleteMandatoryComment(input: $input) {
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
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const createReminderMetaData = `mutation CreateReminderMetaData($input: CreateReminderMetaDataInput!) {
  createReminderMetaData(input: $input) {
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
export const updateReminderMetaData = `mutation UpdateReminderMetaData($input: UpdateReminderMetaDataInput!) {
  updateReminderMetaData(input: $input) {
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
export const deleteReminderMetaData = `mutation DeleteReminderMetaData($input: DeleteReminderMetaDataInput!) {
  deleteReminderMetaData(input: $input) {
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
export const createTaskMetaData = `mutation CreateTaskMetaData($input: CreateTaskMetaDataInput!) {
  createTaskMetaData(input: $input) {
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
export const updateTaskMetaData = `mutation UpdateTaskMetaData($input: UpdateTaskMetaDataInput!) {
  updateTaskMetaData(input: $input) {
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
export const deleteTaskMetaData = `mutation DeleteTaskMetaData($input: DeleteTaskMetaDataInput!) {
  deleteTaskMetaData(input: $input) {
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
export const createMandatoryCommentMetaData = `mutation CreateMandatoryCommentMetaData(
  $input: CreateMandatoryCommentMetaDataInput!
) {
  createMandatoryCommentMetaData(input: $input) {
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
export const updateMandatoryCommentMetaData = `mutation UpdateMandatoryCommentMetaData(
  $input: UpdateMandatoryCommentMetaDataInput!
) {
  updateMandatoryCommentMetaData(input: $input) {
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
export const deleteMandatoryCommentMetaData = `mutation DeleteMandatoryCommentMetaData(
  $input: DeleteMandatoryCommentMetaDataInput!
) {
  deleteMandatoryCommentMetaData(input: $input) {
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
