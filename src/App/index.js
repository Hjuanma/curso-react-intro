
import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI';
import React from "react";

// const defaultTodos = [
//   { text: "Morder mollete", completed: false },
//   { text: "Morder cachetitos", completed: true },
//   { text: "Morder lokit", completed: false },
// ];

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
