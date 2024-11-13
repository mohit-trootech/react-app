/**Calculator Provider */
import Context from "../context/Contexts";
import { useState } from "react";
import Mapping from "../apps/Calculator/ButtonMapping";

function CalculatorProvider({ children }) {
  /**Calculator Provider Component */
  const [operation, setOperation] = useState(0);
  const [result, setResult] = useState(0);

  const updateResult = () => {
    setResult(eval(operation));
  };
  const removeLastCharacter = () => {
    setOperation(operation.slice(0, -1));
  };

    const updateOperation = (current) => {
        /**Update Operation */
        setOperation(operation + current);
    // Mapping.buttons.includes(current) ? setOperation(operation + current) :
  };
  const resetBtn = () => {
    /**Reset button */
    setOperation(0);
    setResult(0);
  };

  const data = {
    operation,
    result,
    updateOperation,
    updateResult,
    resetBtn,
    removeLastCharacter,
  };
  return (
    <Context.Calculator.Provider value={data}>
      {children}
    </Context.Calculator.Provider>
  );
}
export default CalculatorProvider;
