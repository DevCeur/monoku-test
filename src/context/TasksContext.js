import React, { useState, useEffect, createContext } from 'react'

export const TasksContext = createContext([])

export const TasksContextProvider = ({ children }) => {
  const [singleTask, setSingleTask] = useState({})
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

  const unUpdateTask = id => {
    setStatus({
      data: status.data.map(task => {
        if (task.id === id) {
          return {
            ...task,
            checked: false
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

  const getSingleTask = id => {
    status.data.map(task => {
      if (task.id === id) {
        setSingleTask({ ...task })
      } else {
        return null
      }
    })
  }

  return (
    <TasksContext.Provider
      value={{
        status,
        updateTask,
        createTask,
        deleteTask,
        unUpdateTask,
        singleTask,
        getSingleTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
