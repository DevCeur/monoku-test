import React from 'react'
import { TaskStyled } from './TaskStyles'

export const Task = ({ text, completed }) => (
  <TaskStyled>
    <div>
      <input type='checkbox' />
      {completed ? <p>Completed: {text}</p> : <p>{text}</p>}
    </div>
  </TaskStyled>
)
