import React, { useState } from 'react'
import List_item from './List_item';
import Tasks_done from './Tasks_done';


const List_main = () => {

const [tasks, setTasks] = useState([]);
const [inptValue, setInptValue] = useState('');
const [tasks_Done, setTasks_done] = useState([]);


const addTask = (e)=> {
e.preventDefault();
if(inptValue === '') return

const newTask = {
    id: tasks.length +1,
    task_name: inptValue
  }

  setTasks([...tasks, newTask].map((task, index)=>({...task, id: index+1})))
  setInptValue('')
}


const inputChange = (event)=> {
setInptValue(event.target.value)
}

const doTask =(taskId) => {
    const tasksToMove = tasks.find((task)=> task.id === taskId)
    const tasksToStay = tasks.filter((task)=> task.id !== taskId).map((task, index)=>({...task, id: index +1}))
    setTasks_done([...tasks_Done, tasksToMove].map((task, index)=>({...task, id: index+1})))
    setTasks(tasksToStay)
   
}

const deleteTask = (taskId) => {
    const tasksToMoveBack = tasks_Done.find((t)=> t.id === taskId);
    const tasksToStay = tasks_Done.filter((task)=> task.id !== taskId).map((task, index)=>({...task, id: index +1}))
    setTasks([...tasks, tasksToMoveBack].map((tsk, index)=> ({...tsk, id: index+1})))
    setTasks_done(tasksToStay)
}

const editTask = (iD, newName)=>{
const updated = tasks.map(task=> task.id === iD ? { ...task, task_name: newName} : task);
setTasks(updated)
}

  return (
    <>
    <div className="listsContainer">
      <form onSubmit ={addTask} className="formStyle">
        <input type="text" onChange={inputChange} value={inptValue} />
        <button type = "submit">Add</button>
      </form>


      

{/*The list of tasks to be rendered*/}
      <div className="tasksDiv">
        <div id ="task-divs" className="tasks-to-do">
        {tasks.map((el)=>(
         <List_item key={el.id} id={el.id} name={el.task_name} action={doTask} actionEdit={editTask}/>
        ))}
        </div>

        <div id ="task-divs" className="tasks-done">
        {tasks_Done.map((el)=>(
         <Tasks_done key={el.id} id={el.id} name={el.task_name} action={deleteTask} />
        ))}
        </div>
      </div>
      </div>
    </>
   
  )
}

export default List_main