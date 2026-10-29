import { TodoCounter } from "../TodoCounter";
import { TodoInput } from "../TodoInput";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodoList } from "../EmptyTodoList";
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
        {loading && <TodoLoading />}
        {error && <TodoError/>}
        {!loading && filteredTodoList.length === 0 && (
          <EmptyTodoList/>
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