import React from 'react';
import  TodoItem  from './TodoItem';

export default function Todos(props) {

  return (
    <div className="container bg-danger">
      <h3>ToDos List </h3>
      <TodoItem todo = {props.todos[0]} />
    </div>
  )
}
