import React from 'react';
import { BsFillTrash3Fill, BsPencil } from 'react-icons/bs';
import { Fragment, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { TodoList } from './TodoList';

const Wr = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #7cabf7;
  height: 100vh;
`;
const IMC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: 80vh;
`;
const Cont = styled.div`
  box-shadow: 0px 0px 12px #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 30%;
  align-items: center;
  background-color: #16a1f2;
`;
const Inp = styled.input`
  width: 60%;
  font-size: 1.2rem;
  padding: 8px 4px;
  margin: 8px 4px;
  border-radius: 8px;
`;
const Btn = styled.button`
  display: inline-block;
  width: 10%;
  font-size: 1.2rem;
  margin: 2px 4px;
  padding: 10px 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  border-radius: 8px;
  cursor: pointer;
`;

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const todoTaskRef = useRef();

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
    
  }

  const handleTodoAdd = () => {
     const task = todoTaskRef.current.value;
     if(task === '') return;
     setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(), task, completed: false}]
     });
     todoTaskRef.current.value = null;
     
  };
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  return (

    <Wr id='todoapp' className='wrappe'>
     <IMC className="bmi">
       <h1>TODO LIST APP</h1>
       <Cont className='container'>
    <Fragment>
       <TodoList todos={todos} toggleTodo={toggleTodo}/>
       
       <Inp ref={todoTaskRef} type='text' placeholder='New Task...'/>
       <Btn onClick={handleTodoAdd}> <BsPencil /></Btn>
       <Btn onClick={handleClearAll}> <BsFillTrash3Fill /> </Btn>
       <div>
       You have left {todos.filter((todo) => !todo.completed).length} tasks to finish
       </div>
    </Fragment>
    </Cont>
   </IMC>
   </Wr>
  );
}

