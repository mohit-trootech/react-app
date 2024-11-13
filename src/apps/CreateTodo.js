/**App to Create a New Todo */

import { useEffect } from "react";
import "../utils/contants";
import axios from "axios";
import contants from "../utils/contants";
import { useState } from "react";
import AlertToast from "../components/AlertToast";
function CreateTodo() {
  /**Create Todo form using Daisy UI */
  const [error, setError] = useState(null);

  const CreateTodo = async (todo) => {
    try {
      await axios.post(contants.todosUrl, todo);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    /**Handle Form Submit event */
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const todo = {
        title: formData.get("title"),
        description: formData.get("description"),
      };
      CreateTodo(todo);
    });
  }, []);

  return (
    <>
      {error ? <AlertToast message={error} /> : <></>}
      <div className="container mx-auto my-5">
        <form method="post" className="form-control">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Enter Title</span>
            </div>
            <input
              type="text"
              placeholder="Enter Title.."
              name="title"
              required
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Enter Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="description"
              required
              placeholder="Description.."
            ></textarea>
          </label>
          <button className="btn btn-primary hover:shadow-xl text-center mt-5 transition-all duration-300 delay-50 scale-95 hover:scale-100 ">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTodo;
