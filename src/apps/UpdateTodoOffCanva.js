/**Update App for Update Todos Handling */
function UpdateTodoOffCanva({ todo, updateTodo }) {
  /**Update Todo Element OffCanva */
  const updateTodoData = (id, event) => {
    event.preventDefault();
    updateTodo(id, {
      title: event.target.title.value,
      description: event.target.description.value,
      modified: new Date().toISOString(),
    });
  };

  return (
    <>
      <div className="drawer-side z-[999]">
        <label
          htmlFor={"my-drawer-" + todo.id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-base-200 min-h-full px-4 pt-5">
          <p className="text-xl font-bold text-left">Update Todo</p>
          <button className="btn mt-3 border-white">
            Last Updated:
            <div className="badge badge-secondary">
              {new Date(todo.modified).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </button>
          <form
            className="mt-5"
            method="post"
            onSubmit={(event) => updateTodoData(todo.id, event)}
          >
            <input
              type="text"
              placeholder="Enter title"
              required
              name="title"
              defaultValue={todo.title}
              className="input mb-3 input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter Description"
              name="description"
              defaultValue={todo.description}
            ></textarea>
            <button type="submit" className="w-full btn btn-primary mt-3">
              <label
                htmlFor={"my-drawer-" + todo.id}
                aria-label="close sidebar"
              >
                Update
              </label>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateTodoOffCanva;
