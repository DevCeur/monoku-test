import React from 'react'
import { TasksContext } from '../../context/TasksContext'

export const Filters = () => {
  return (
    <div>
      Filtrar:
      <TasksContext.Consumer>
        {({ setFilter }) => (
          <div className='filters-container'>
            <button onClick={() => setFilter('all')}>all</button>
            <button onClick={() => setFilter('complete')}>complete</button>
          </div>
        )}
      </TasksContext.Consumer>
    </div>
  )
}
