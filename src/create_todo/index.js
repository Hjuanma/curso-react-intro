import React from 'react';
import './CreateTodoBtn.css'
import { TodoContext } from '../TodoContext';

function CreateTodoBtn() {
  const { addTodo } = React.useContext(TodoContext);

  return <button className="CreateTodoButton" onClick={addTodo}>+</button>;
}

export {CreateTodoBtn};