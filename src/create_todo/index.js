import './CreateTodoBtn.css'

function CreateTodoBtn({addTodo}) {
  return <button className="CreateTodoButton" onClick={addTodo}>+</button>;
}

export {CreateTodoBtn};