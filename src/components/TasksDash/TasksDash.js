import React from 'react'
import { TasksDashStyled } from './TasksDashStyled'

export const TasksDash = ({ children }) => {
  return (
    <TasksDashStyled
      initial={{ translateX: -5, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 5, opacity: 0 }}
    >
      {children}
    </TasksDashStyled>
  )
}
