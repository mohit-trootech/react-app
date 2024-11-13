/**Filter Todos */
import constants from "../utils/contants";

function FilterTodos({
  fetchTodos,
  setModified,
  setCreated,
  setQ,
  modified,
  created,
  q,
}) {
  /**Filter Todo Component */
  const modifiedValues = {
    "Latest Updated": "modified",
    "Oldest Updated": "-modified",
  };
  const createdValues = {
    Newest: "-created",
    Oldest: "created",
  };

  const filterData = async () => {
    /**Filter Todos */
    setModified(document.querySelector("select[name=modified]").value);
    setCreated(document.querySelector("[name=created]").value);
    setQ(document.querySelector("input[name=q]").value);
    fetchTodos(constants.todosUrl, {
      modified: modified,
      created: created,
      q: q,
    });
  };

  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <div className="grid grid-cols-4 gap-4">
          <select
            className="select select-sm select-bordered w-full max-w-xs"
            name="modified"
          >
            {Object.entries(modifiedValues).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          <select
            className="select select-sm select-bordered w-full max-w-xs"
            name="created"
          >
            {Object.entries(createdValues).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="q"
            placeholder="Search"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <button onClick={filterData} className="btn btn-primary btn-sm">
            Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterTodos;
