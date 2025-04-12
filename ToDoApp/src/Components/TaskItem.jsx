import React from 'react'
import './TasksStyle.css'

const TaskItem = ({name,id, action, actionEdit}) => {
  return (
  <li className="taskItem">
    <div className='li-text'>
    <p>{id}</p>
    <p>{name}</p>
    </div>
    <button onClick={actionEdit}>Edit</button>
    <button onClick={()=>action(id)}>Done</button>
  </li>
  )
}

export default TaskItem
