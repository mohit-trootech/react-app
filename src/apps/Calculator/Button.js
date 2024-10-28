/**Specific Button Component */

function Button({ button, updateOperation }) {
  /**Button Component */
  return (
    <>
      <div className="w-full">
        <button
          className="w-full btn hover:border-primary"
          onClick={() => updateOperation(button)}
        >
          {button}
        </button>
      </div>
    </>
  );
}

export default Button;
