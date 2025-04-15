import React, { PureComponent } from 'react'
import './TasksStyle.css'


class TaskItem extends PureComponent {

state = {
isEditing:false,
edited_task: this.props.name
}

toggleEdit = ()=> {
  this.setState(prevState => ({isEditing: !prevState.isEditing}))
}

handleInputChange = (e) => {
  this.setState({edited_task: e.target.value})
}

saveEdit = ()=> {
  const {id, editAction} = this.props
  this.setState({isEditing:false});
    editAction(id, this.state.edited_task)
  
}

  render(){
    const {id, name, action} = this.props
    const {isEditing, edited_task} = this.state;

    return (
      <li className="taskItem">
        <div className='li-text'>
        <p>{id}</p>
        {isEditing ? (
          <input type="text" value = {edited_task} onChange={this.handleInputChange} />
        ) : (
        <p>{name}</p>
        )}
        
        </div>
        <div className="action-buttons"> 
          {isEditing ? (
            <button onClick={this.saveEdit}>Save</button>
          ) : (
            <button onClick={this.toggleEdit}>Edit</button>
          )}
        <button onClick={()=>action(id)}>Done</button>
        </div>
      </li>
      )

  }

}




export default TaskItem
