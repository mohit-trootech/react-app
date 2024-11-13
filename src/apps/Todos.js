/**Todos App for Todos API */
import axios from "axios";
import { useState, useEffect } from "react";
import AlertToast from "../components/AlertToast";
import "../utils/contants";
import ListTodos from "../apps/ListTodos";
import contants from "../utils/contants";
import FilterTodos from "../apps/Filter";

function Todos() {
  const [modified, setModified] = useState("-modified");
  const [created, setCreated] = useState("-created");
  const [q, setQ] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  /**Fetch Todos */
  const fetchTodos = async (url, params) => {
    try {
      const res = await axios.get(url, { params: params });
      setTodos(res.data.results);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTodos(contants.todosUrl);
  }, []);
  const handlePreviousPage = () => {
    if (previousPageUrl) {
      fetchTodos(previousPageUrl);
    }
  };

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchTodos(nextPageUrl);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${contants.todosUrl}${id}/`);
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.patch(
        `${contants.todosUrl}${id}/`,
        updatedTodo
      );
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          return todo.id === id ? response.data : todo;
        })
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      {error ? (
        <AlertToast message={error} />
      ) : (
        <>
          <div className="container mx-auto">
            <FilterTodos
              fetchTodos={fetchTodos}
              setTodos={setTodos}
              setModified={setModified}
              setCreated={setCreated}
              setQ={setQ}
              modified={modified}
              created={created}
              q={q}
            />
            <ListTodos
              todos={todos}
              key={todos.id}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
            <div className="flex justify-end">
              <div className="join grid grid-cols-2 my-5">
                <button
                  className="join-item btn btn-outline"
                  disabled={!previousPageUrl}
                  onClick={handlePreviousPage}
                >
                  Previous Page
                </button>
                <button
                  className="join-item btn btn-primary"
                  disabled={!nextPageUrl}
                  onClick={handleNextPage}
                >
                  Next Page
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Todos;
