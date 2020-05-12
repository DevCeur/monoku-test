import React from 'react'
import { TasksContext } from '../../context/TasksContext'
import { Task } from './Task'

export const ListsTasks = () => {
  return (
    <div>
      <TasksContext.Consumer>
        {({ status }) =>
          status.data.map(task => (
            <Task key={task.id} text={task.text} completed={task.checked} />
          ))
        }
      </TasksContext.Consumer>
    </div>
  )
}
