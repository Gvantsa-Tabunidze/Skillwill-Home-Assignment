import React from 'react'
import './TasksStyle.css'
import { useState, useEffect } from 'react'

const List_item = ({id, name, action, actionEdit}) => {
const [isEditing, setIsEditing] = useState(false)
const [editVal, setEditVal] = useState(name)

useEffect(() => {
    setEditVal(name);
  }, [name]);

const toggleEdit = ()=> {
    setIsEditing(true)
}

const handleSave = ()=> {
   actionEdit(id, editVal);
    setIsEditing(false);
}

return (
    <>
      <li className="taskItem">
        <div className="li-text">
          {!isEditing ? (
            <>
            <span>
            <p>{id}</p>
            <p>{name}</p>
            </span>
              
              <div className="action-buttons">
                <button onClick={() => action(id)}>Done</button>
                <button onClick={toggleEdit}>Edit</button>
              </div>
            </>
          ) : (
            <>
              <input value={editVal} onChange={(e) => setEditVal(e.target.value)} />
              <button onClick={handleSave}>Save</button>
            </>
          )}
        </div>
      </li>
    </>
  );
};


export default React.memo(List_item)