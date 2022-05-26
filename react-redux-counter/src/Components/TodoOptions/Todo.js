import React, { useState } from 'react'


    const Todo = ({id, task, completed,completeTodo,removeTodo,updateTodo}) => {
        
        const [isEditing,setIsEditing]=useState(false);
        const [editTask,setEditTask]=useState(task);
    
        const handleUpdate=(e)=>{
            e.preventDefault();
            updateTodo(id,editTask);
            setIsEditing(false);
    
        }
  return (
    
       <div className={completed ? "Todo completed" : "Todo"}>
            {isEditing 
            ?(
                <form className='Todo-edit-form' onSubmit={handleUpdate}>
                    <input
                        type='text'
                        name='task'
                        value={editTask}
                        onChange={(e)=>setEditTask(e.target.value)}
                    />
                    <button >Save</button>
                </form>
            )
            :(
            <div classNames='task-text'>
                <li className='Todo-task' onClick={completeTodo}>
                    {task}
                </li>
            </div>
            )}
            
            <div style={{ background:'#181E20'}}>
                
                <buttons style={{ background:'#181E20'}} onClick={()=>setIsEditing(true)}>
                    <i style={{ background:'#181E20'}} className="editbtn  fas fa-pen"/>
                </buttons>
                
                <buttons style={{ background:'#181E20'}} onClick={removeTodo}>
                    <i style={{ background:'#181E20'}} className="fas fa-trash"/>
                </buttons>
            </div>           
    
    </div>
  )
}

export default Todo
