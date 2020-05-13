import React from 'react'

import { TasksContext } from '../../context/TasksContext'
import { TaskStyled } from './TaskStyles'

export const Task = ({ id, text, completed }) => {
  const API_UPDATE_TASK = `https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/update`
  const API_DELETE_TASK = `https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/delete`

  const updateTaskApi = async body => {
    const response = await fetch(API_UPDATE_TASK, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = response.json()
    return json
  }

  const deleteTaskApi = async () => {
    const response = await fetch(API_DELETE_TASK, {
      method: 'DELETE'
    })
    const json = response.json()
    return json
  }

  return (
    <TaskStyled>
      <TasksContext.Consumer>
        {({ updateTask, deleteTask }) => {
          const checkTask = id => {
            updateTaskApi({ checked: true }).then(() => updateTask(id))
          }

          const deleteTaskSelected = id => {
            deleteTaskApi().then(() => deleteTask(id))
          }

          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {completed ? (
                <p
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'line-through',
                    color: '#757575'
                  }}
                >
                  {text}
                </p>
              ) : (
                <p
                  style={{
                    cursor: 'pointer'
                  }}
                  onClick={() => checkTask(id)}
                >
                  {text}
                </p>
              )}
              <p
                onClick={() => deleteTaskSelected(id)}
                style={{
                  cursor: 'pointer'
                }}
              >
                delete
              </p>
            </div>
          )
        }}
      </TasksContext.Consumer>
    </TaskStyled>
  )
}
