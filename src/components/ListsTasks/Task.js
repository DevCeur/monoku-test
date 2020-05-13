import React from 'react'

import { TasksContext } from '../../context/TasksContext'
import { TaskStyled } from './TaskStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Icon, TextContainer } from './styles'

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
        {({ updateTask, deleteTask, unUpdateTask }) => {
          const checkTask = id => {
            updateTaskApi({ checked: true }).then(() => updateTask(id))
          }

          const unCheckTask = id => {
            updateTaskApi({ checked: false }).then(() => unUpdateTask(id))
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
                <TextContainer complete onClick={() => unCheckTask(id)}>
                  <FontAwesomeIcon icon={faCheck} style={{ marginRight: 15 }} />
                  {text}
                </TextContainer>
              ) : (
                <TextContainer onClick={() => checkTask(id)}>
                  {text}
                </TextContainer>
              )}
              <Icon
                onClick={() => deleteTaskSelected(id)}
                style={{
                  cursor: 'pointer'
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Icon>
            </div>
          )
        }}
      </TasksContext.Consumer>
    </TaskStyled>
  )
}