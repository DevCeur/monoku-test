import React, { useState, useEffect, createContext } from 'react'

export const TasksContext = createContext([])

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const API_TASKS =
    'https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all'

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(API_TASKS)
      const json = await response.json()

      return json
    }

    getTasks().then(data => setTasks(data))
  }, [])

  return <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
}
