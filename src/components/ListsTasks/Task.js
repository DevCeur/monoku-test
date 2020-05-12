import React from 'react'
import { TaskStyled } from './TaskStyles'

export const Task = ({ id, text, completed }) => {
  const updateTask = (id, body) => {
    const API_UPDATE_TASK = `https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/update`

    fetch(API_UPDATE_TASK, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.log('error:', error))
      // eslint-disable-next-line no-restricted-globals
      .then(response => location.reload())
  }

  return (
    <TaskStyled>
      <div>
        <input
          type='checkbox'
          onSubmit={() => updateTask(id, { checked: true })}
        />
        {completed ? (
          <p>Completed: {text}</p>
        ) : (
          <p
            onClick={() => {
              updateTask(id, { checked: true })
            }}
          >
            {text}
          </p>
        )}
      </div>
    </TaskStyled>
  )
}
