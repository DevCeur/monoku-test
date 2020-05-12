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

  useEffect(() => {
    setStatus({
      loading: true,
      error: false,
      data: []
    })
    const getTasks = async () => {
      const response = await fetch(API_TASKS)
      const json = await response.json()

      return json
    }

    getTasks().then(data =>
      setStatus({ loading: false, error: false, data: data })
    )
  }, [])

  return (
    <TasksContext.Provider value={{ status }}>{children}</TasksContext.Provider>
  )
}
