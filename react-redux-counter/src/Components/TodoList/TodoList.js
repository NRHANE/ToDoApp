import React from 'react'
import Todo from '../TodoOptions/Todo'
import './TodoList.css'
import AddTodo from '../AddTodo/AddTodo'
import {useSelector,useDispatch} from 'react-redux'
import {completeTodo,addTodo,removeTodo,updateTodo} from '../../Redux/action'

const TodoList = () => {
    const state= useSelector ((state)=>({...state.todos}));
const dispatch=useDispatch ();
const create=(newTodo)=>{
    dispatch(addTodo(newTodo))
};
const update=(id,updatedTask)=>{
    dispatch(updateTodo({id,updatedTask}))
}
  return (
    <div className='TodoList'>
      <h1>Todo app using react Redux</h1>
      <AddTodo createTodo={create}/>
      <ul>
          <hr className='style-eight'/>
          {state.todos &&
          state.todos.map((todo)=>{
            return(
                <div key={todo.id} >
                    <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                completeTodo={()=>dispatch(completeTodo(todo))}
                                removeTodo={()=>dispatch(removeTodo(todo))}
                                updateTodo={update}
                            />
         </div>
            )
          })}
      </ul>
    </div>
  )
}

export default TodoList
