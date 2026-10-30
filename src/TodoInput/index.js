import React from 'react';
import './TodoInput.css'
import { TodoContext } from '../TodoContext';

function TodoInput() {

  const { setSearchValue, SearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="TodoInput"
      placeholder="Agrega tu tarea"
      value={SearchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoInput };