import React from 'react'

import { Header } from '../components/Header/Header'
import { Layout } from '../components/LayoutComponent/Layout'
import { TasksDash } from '../components/TasksDash/TasksDash'

export const Home = () => {
  return (
    <Layout>
      <Header>
        <div>
          <p>Martes, 12 de Mayo</p>
          <h2>12:45 am</h2>

          <h3>Que planeas hacer hoy?</h3>
        </div>
      </Header>
      <TasksDash>
        <h2>Añade las tareas que deseas realizar</h2>
      </TasksDash>
    </Layout>
  )
}
