import React from 'react'

import { Layout } from '../components/LayoutComponent/Layout'
import { TasksContext } from '../context/TasksContext'
import { ContainerView } from '../components/TaskDetails/ContainerView'
import { Link } from 'react-router-dom'

export const TaskDetails = () => {
  return (
    <Layout>
      <TasksContext.Consumer>
        {({ singleTask }) => {
          return (
            <ContainerView>
              <h2>{singleTask.text}</h2>
              {singleTask.checked ? (
                <p>Genial! Ya completaste esta tarea</p>
              ) : (
                <p>Aun no has compleatado esta tarea...</p>
              )}
              <Link to='/'>Go back</Link>
            </ContainerView>
          )
        }}
      </TasksContext.Consumer>
    </Layout>
  )
}
