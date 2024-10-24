import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
function UseStateDemo() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="stats">
                <div className="stat">
                  <div className="stat-value kbd select-none">{counter}</div>
                </div>
              </div>
              <div className="card-body">
                <div className="card-actions justify-between">
                  <button
                    onClick={() => setCounter(counter - 1)}
                    className="btn btn-secondary"
                  >
                    <FaMinus />
                  </button>
                  <button
                    onClick={() => setCounter(counter + 1)}
                    className="btn btn-primary"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStateDemo;
