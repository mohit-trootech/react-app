/**List App for List Todos */
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { TiWarningOutline } from "react-icons/ti";
function ListTodos({ todos, deleteTodo, updateTodo }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center cursor-progress">
          <p className="loading loading-bars loading-lg text-primary"></p>
        </div>
      ) : todos.length ? (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      ) : (
        <>
          <div role="alert" className="alert alert-warning">
            <TiWarningOutline />
            <span>Warning: No Todos Available Create Some Now</span>
            <a role="button" className="btn btn-primary" href="/todo-create">
              Create Todos
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default ListTodos;
