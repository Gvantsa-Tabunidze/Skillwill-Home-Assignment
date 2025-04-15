import { Component } from "react";
import TaskItem from "./TaskItem";
import Tasks_done from "./Tasks_done";



class TasksList extends Component {
  state = {
    inputValue:'',
    tasks: [],
    tasks_done:[],
   
  }

inputChange = (event) =>{
  this.setState({inputValue: event.target.value})
}

addTask = (evt)=>{
  evt.preventDefault()
  if(this.state.inputValue === '') return
  const newTask = {
    id: this.state.tasks.length+1,
    task_name: this.state.inputValue
  }
  const updatedTasks = [...this.state.tasks, newTask].map((task,index)=>({
    ...task,
    id: index + 1,
  }))
  this.setState({
    tasks: updatedTasks,
    inputValue: '',
  })
}


doTask = (taskId)=>{
  const tasksToMove = this.state.tasks.find((task)=> task.id === taskId)
  const tasksToStay = this.state.tasks.filter((task)=> task.id !== taskId).map((task, index)=>({
    ...task,
    id: index+1
  }))

  const updatedDone = [...this.state.tasks_done, tasksToMove].map((task, index)=>({
    ...task,
    id: index+1
  }))
  this.setState({
    tasks:tasksToStay,
    tasks_done:updatedDone
  })
}

deleteFromDone =(taskID)=>{
const tasksToMoveBack = this.state.tasks_done.find((t)=> t.id === taskID)
const tasksToStay = this.state.tasks_done.filter((t)=>t.id !==taskID).map((task, index)=>({
  ...task,
  id:index+1
}))
const updatedTasks = [...this.state.tasks, tasksToMoveBack].map((task,index)=>({
  ...task,
  id: index+1
}))

this.setState({
  tasks:updatedTasks,
  tasks_done:tasksToStay
})
}


editTask = (taskId, newName)=>{
const updatedTasks = this.state.tasks.map(task => task.id === taskId ? {...task, task_name: newName} : task);
this.setState({tasks: updatedTasks})
}


  render(){
    let activeTasksMessage = null;
    if(this.state.tasks.length ===0 && this.state.tasks_done.length ===0){
      activeTasksMessage = <p className="emptyState">No active tasks here</p>
    } else if (this.state.tasks.length ===0  && this.state.tasks_done.length > 0) {
      activeTasksMessage = <p className="emptyState">All tasks are successfully completed</p>;
    }
 
   
    return(
      <>
      <div className="listsContainer">
      <form onSubmit ={this.addTask} className="formStyle">
        <input type="text" onChange={this.inputChange} value={this.state.inputValue} />
        <button type = "submit">Add</button>
      </form>


      {activeTasksMessage}

{/*Thelist of tasks to be rendered*/}
      <div className="tasksDiv">
        <div id ="task-divs" className="tasks-to-do">
        {this.state.tasks.map((el)=>(
         <TaskItem key={el.id} id={el.id} name={el.task_name} action={this.doTask} editAction={this.editTask}/>
        ))}
        </div>

        <div id ="task-divs" className="tasks-done">
        {this.state.tasks_done.map((el)=>(
         <Tasks_done key={el.id} id={el.id} name={el.task_name} action={this.deleteFromDone} />
        ))}
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default TasksList