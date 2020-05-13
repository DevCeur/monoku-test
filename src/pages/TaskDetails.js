import React from 'react'

import { Layout } from '../components/LayoutComponent/Layout'
import { TasksContext } from '../context/TasksContext'

export const TaskDetails = () => {
  return (
    <Layout>
      <TasksContext.Consumer>
        {({ singleTask }) => {
          return (
            <div>
              <h2>{singleTask.text}</h2>
              {singleTask.checked ? <p>Completed</p> : <p>No completed</p>}
            </div>
          )
        }}
      </TasksContext.Consumer>
    </Layout>
  )
}
