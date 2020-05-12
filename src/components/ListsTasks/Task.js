import React from 'react'

import { TasksContext } from '../../context/TasksContext'
import { TaskStyled } from './TaskStyles'

export const Task = ({ id, text, completed }) => {
  const API_UPDATE_TASK = `https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/update`

  const updateTaskApi = async body => {
    const response = await fetch(API_UPDATE_TASK, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = response.json()
    // updateTask(id, { checked: true })
    return json
  }

  return (
    <TaskStyled>
      <TasksContext.Consumer>
        {({ updateTask }) => {
          const checkTask = id => {
            updateTaskApi({ checked: true }).then(() => updateTask(id))
          }

          return (
            <div>
              <input type='checkbox' />
              {completed ? (
                <p>Completed: {text}</p>
              ) : (
                <p onClick={() => checkTask(id)}>{text}</p>
              )}
            </div>
          )
        }}
      </TasksContext.Consumer>
    </TaskStyled>
  )
}
