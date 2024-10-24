/**Todos Component for Todos API */
import axios from "axios";
import { useState, useEffect } from "react";
import AlertToast from "../components/AlertToast";
import "../utils/contants";
import ListTodos from "../apps/ListTodos";
import contants from "../utils/contants";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const fetchTodos = async (url = contants.todosUrl) => {
    try {
      const res = await axios.get(url);
      setTodos(res.data.results);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(todos);
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

  return (
    <>
      {error ? (
        <AlertToast message={error} />
      ) : (
        <>
          <div className="container mx-auto">
            <ListTodos todos={todos} />
            <div className="flex justify-end">
              <div className="join grid grid-cols-2">
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
