import React from 'react'

import { TasksContext } from '../../context/TasksContext'
import { TaskStyled } from './TaskStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Icon, TextContainer, IconCheck } from './styles'
import { NavLink } from 'react-router-dom'

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
        {({ updateTask, deleteTask, unUpdateTask, getSingleTask }) => {
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
                  <IconCheck>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheck>
                  {text}
                </TextContainer>
              ) : (
                <TextContainer onClick={() => checkTask(id)}>
                  <IconCheck nochecked='true'>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheck>
                  {text}
                </TextContainer>
              )}
              <div>
                <NavLink
                  onClick={() => getSingleTask(id)}
                  to={`/${id}`}
                  style={{
                    marginRight: 15,
                    fontWeight: 'bold',
                    fontSize: 18,
                    textDecoration: 'none',
                    color: 'grey'
                  }}
                >
                  +
                </NavLink>
                <Icon
                  onClick={() => deleteTaskSelected(id)}
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Icon>
              </div>
            </div>
          )
        }}
      </TasksContext.Consumer>
    </TaskStyled>
  )
}
