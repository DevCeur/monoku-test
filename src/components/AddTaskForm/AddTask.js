import React, { useState } from 'react'

import { TasksContext } from '../../context/TasksContext'
import { Form, Input } from './AddTaskForm'

export const AddTask = () => {
  const [text, setText] = useState({ text: '' })
  const [showButton, setShowButton] = useState(false)
  const [error, setError] = useState('')

  const handleShowButton = e => {
    if (e.target.value === '') {
      setShowButton(false)
      setText({ text: e.target.value })
    } else {
      setShowButton(true)
      setText({ text: e.target.value })
    }
  }

  const createTaskApi = async () => {
    const API_ADD_TASK =
      'https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/add'

    if (text.text === '') {
      setError('Por favor, rellena el campo')
    } else {
      const response = await fetch(API_ADD_TASK, {
        method: 'POST',
        body: JSON.stringify(text),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = response.json()
      return json
    }
  }

  return (
    <TasksContext.Consumer>
      {({ createTask }) => {
        const createNewTask = e => {
          e.preventDefault()
          setText({ text: 'agregando...' })
          setShowButton(false)
          createTaskApi().then(response => {
            createTask({ ...response })
            setText({ text: '' })
          })
        }

        return (
          <Form onSubmit={createNewTask}>
            <p style={{ color: 'red', marginTop: 15 }}>{error}</p>
            <Input
              style={{ marginTop: 10}}
              type='text'
              placeholder='Ej: Comporar tomates'
              value={text.text}
              onChange={handleShowButton}
            />
            {showButton ? (
              <Input
                type='submit'
                submit='true'
                value='Add task'
                onSubmit={createNewTask}
              />
            ) : null}
          </Form>
        )
      }}
    </TasksContext.Consumer>
  )
}
