import React, { useState, useEffect, createContext } from 'react'

export const TasksContext = createContext([])

export const TasksContextProvider = ({ children }) => {
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    data: []
  })
  const API_TASKS =
    'https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all'

  const getTasks = async () => {
    const response = await fetch(API_TASKS)
    const json = await response.json()

    return json
  }

  useEffect(() => {
    setStatus({
      loading: true,
      error: false,
      data: []
    })

    getTasks().then(data =>
      setStatus({ loading: false, error: false, data: data })
    )
  }, [])

  const updateTask = id => {
    setStatus({
      data: status.data.map(task => {
        if (task.id === id) {
          return {
            ...task,
            checked: true
          }
        } else {
          return task
        }
      })
    })
  }

  const deleteTask = id => {
    setStatus({
      data: status.data.filter(task => task.id !== id)
    })
  }

  const createTask = task => {
    setStatus({
      loading: true,
      error: false,
      data: []
    })

    getTasks().then(data =>
      setStatus({ loading: false, error: false, data: data })
    )
  }

  return (
    <TasksContext.Provider
      value={{ status, updateTask, createTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
