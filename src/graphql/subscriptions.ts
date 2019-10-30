// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateReminder = `subscription OnCreateReminder {
  onCreateReminder {
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
export const onUpdateReminder = `subscription OnUpdateReminder {
  onUpdateReminder {
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
export const onDeleteReminder = `subscription OnDeleteReminder {
  onDeleteReminder {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
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
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
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
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateMandatoryComment = `subscription OnCreateMandatoryComment {
  onCreateMandatoryComment {
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
export const onUpdateMandatoryComment = `subscription OnUpdateMandatoryComment {
  onUpdateMandatoryComment {
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
export const onDeleteMandatoryComment = `subscription OnDeleteMandatoryComment {
  onDeleteMandatoryComment {
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
export const onCreateCustomer = `subscription OnCreateCustomer {
  onCreateCustomer {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const onUpdateCustomer = `subscription OnUpdateCustomer {
  onUpdateCustomer {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const onDeleteCustomer = `subscription OnDeleteCustomer {
  onDeleteCustomer {
    id
    customername
    user
    groupsCanAccess
  }
}
`;
export const onCreateReminderMetaData = `subscription OnCreateReminderMetaData {
  onCreateReminderMetaData {
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
export const onUpdateReminderMetaData = `subscription OnUpdateReminderMetaData {
  onUpdateReminderMetaData {
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
export const onDeleteReminderMetaData = `subscription OnDeleteReminderMetaData {
  onDeleteReminderMetaData {
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
export const onCreateTaskMetaData = `subscription OnCreateTaskMetaData {
  onCreateTaskMetaData {
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
export const onUpdateTaskMetaData = `subscription OnUpdateTaskMetaData {
  onUpdateTaskMetaData {
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
export const onDeleteTaskMetaData = `subscription OnDeleteTaskMetaData {
  onDeleteTaskMetaData {
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
export const onCreateMandatoryCommentMetaData = `subscription OnCreateMandatoryCommentMetaData {
  onCreateMandatoryCommentMetaData {
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
export const onUpdateMandatoryCommentMetaData = `subscription OnUpdateMandatoryCommentMetaData {
  onUpdateMandatoryCommentMetaData {
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
export const onDeleteMandatoryCommentMetaData = `subscription OnDeleteMandatoryCommentMetaData {
  onDeleteMandatoryCommentMetaData {
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
