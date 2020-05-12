import React, { useState } from 'react'

import { Form, Input } from './AddTaskForm'

export const AddTask = () => {
  const [text, setText] = useState({ text: '' })
  const [showButton, setShowButton] = useState(false)

  const createTask = e => {
    e.preventDefault()
    const API_ADD_TASK =
      'https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/add'

    if (text.text === '') {
      return null
    } else {
      fetch(API_ADD_TASK, {
        method: 'POST',
        body: JSON.stringify(text),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .catch(error => console.log('error:', error))
        // eslint-disable-next-line no-restricted-globals
        .then(response => location.reload())
    }
  }

  return (
    <Form onSubmit={createTask}>
      <Input
        type='text'
        placeholder='Ej: Comporar tomates'
        value={text.text}
        onClick={() => setShowButton(!showButton)}
        onChange={e => setText({ text: e.target.value })}
      />
      {showButton ? (
        <Input type='submit' submit='true' value='Add task' onSubmit={createTask} />
      ) : null}
    </Form>
  )
}
