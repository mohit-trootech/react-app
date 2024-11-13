/**Todo Element */
import UpdateTodoOffCanva from "./UpdateTodoOffCanva";
function Todo({ todo, deleteTodo, updateTodo }, key) {
  /**Todo Component Daisy UI */

  return (
    <>
      <div
        id={"todo-" + todo.id}
        className="card border hover:border-primary duration-300 delay-50 hover:shadow-2xl transition-all card-compact bg-base-100 w-96"
      >
        <div className="card-body">
          <h2 className="card-title">{todo.title}</h2>
          <p>{todo.description}</p>
          <div className="flex justify-between items-center">
            <div className="badge badge-ghost hover:shadow-xl transition-all duration-300 delay-50">
              {new Date(todo.created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="card-actions justify-end items-center">
              <div className="drawer-end">
                <input
                  id={"my-drawer-" + todo.id}
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor={"my-drawer-" + todo.id}
                    className="drawer-button btn btn-primary"
                  >
                    Edit Todo
                  </label>
                </div>
                <UpdateTodoOffCanva
                  key={todo.id}
                  todo={todo}
                  updateTodo={updateTodo}
                />
              </div>
              <button
                className="btn btn-error hover:shadow-inner transition-all duration-300 delay-50"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
