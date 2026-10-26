import { TodoCounter } from "../TodoCounter";
import { TodoInput } from "../TodoInput";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoBtn } from "../create_todo";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  addTodo,
  filteredTodoList,
  completeTask,
  deleteTask,
  loading, 
  error
}) {
  return (
    <>
      <TodoCounter done={completedTodos} total={totalTodos} />
      <TodoInput searchValue={searchValue} setSearchValue={setSearchValue} />

      <CreateTodoBtn addTodo={addTodo} />

      <TodoList>
        {loading && <p>Loading..</p>}
        {error && <p>ERROR</p>}
        {!loading && filteredTodoList.length === 0 && (
          <p>No tienes items en la lista</p>
        )}
        {filteredTodoList.map((todo) => (
          <TodoItem
            onComplete={() => completeTask(todo)}
            onDelete={() => deleteTask(todo)}
            todo={todo}
          />
        ))}
      </TodoList>
    </>
  );
}

export {AppUI};