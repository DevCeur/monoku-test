import React from 'react'
import { TasksContext } from '../../context/TasksContext'
import { Task } from './Task'
import { Loading } from '../Loading/Loading'

export const ListsTasks = () => {
  return (
    <div>
      <TasksContext.Consumer>
        {({ status, tasks }) => (
          <div>
            {status.loading ? (
              <Loading />
            ) : status.data.length === 0 ? (
              <p style={{ color: '#757575', textAlign: 'center' }}>
                No has añadido ninguna tarea hasta ahora.
              </p>
            ) : (
              status.data.map(task => (
                <Task
                  key={task.id}
                  text={task.text}
                  completed={task.checked}
                  id={task.id}
                />
              ))
            )}
          </div>
        )}
      </TasksContext.Consumer>
    </div>
  )
}
