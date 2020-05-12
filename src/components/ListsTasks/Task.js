import React from 'react'

export const Task = ({ text, completed }) => (
  <li >{completed ? <p>Completed: {text}</p> : <p>{text}</p>}</li>
)
