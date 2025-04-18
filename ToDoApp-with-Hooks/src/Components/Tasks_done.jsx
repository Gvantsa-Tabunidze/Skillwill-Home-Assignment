import React from 'react'
import './TasksStyle.css'

const Tasks_done = ({id, name, action}) => {
  return (
   <>
   <li className="taskItem">
    <div className='li-text'>
    <p>{id}</p>
    <p>{name}</p>
    </div>
  <button onClick={()=>action(id)}>Delete</button>
  </li>
   </>
  )
}

export default Tasks_done