import React from 'react';
import './TodoInput.css'

function TodoInput({SearchValue, setSearchValue}) {
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