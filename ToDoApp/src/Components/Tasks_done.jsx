import React from 'react'

const Tasks_done = ({name,id,action}) => {
  return (
   
    <li className="taskItem">
    <div className='li-text'>
    <p>{id}</p>
    <p>{name}</p>
    </div>
  <button onClick={()=>action(id)}>Delete</button>
  </li>
   
  )
}

export default Tasks_done
