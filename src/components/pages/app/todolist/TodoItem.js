import React from 'react'

export const TodoItem = ({ todo, toggleTodo }) => {
    const { id, task, completed} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }
  return (
    
       <li style={{listStyle: 'none'}}>
           <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
           {task}
        </li>
    
  )
}

