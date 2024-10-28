/**Js Based Calculator APP */
import Display from "./Calculator/Display";
import { useContext } from "react";
import Button from "./Calculator/Button";
import Mapping from "./Calculator/ButtonMapping";
import Context from "../context/Contexts";
import { FaBackspace } from "react-icons/fa";
function Calculator() {
  /**JS Based Calculator Component using Daisy UI */
  const {
    operation,
    updateOperation,
    result,
    updateResult,
    resetBtn,
    removeLastCharacter,
  } = useContext(Context.Calculator);
  return (
    <>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-8 my-10 rounded-xl border container mx-auto">
        <div className="w-full mx-auto rounded-xl shadow-xl relative overflow-hidden">
          <div className="mx-5 h-40 flex flex-col justify-center items-end text-right">
            <Display calculation={operation} result={result} />
          </div>
          <div className="m-5">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid grid-cols-3 gap-2" dir="rtl">
                {Mapping.buttons.map((button) => {
                  return (
                    <Button
                      key={button}
                      button={button}
                      updateOperation={updateOperation}
                    />
                  );
                })}
                <div className="w-full">
                  <button className="w-full btn hover:border-primary">0</button>
                </div>
                <div className="w-full">
                  <button className="w-full btn hover:border-primary">.</button>
                </div>
                <div className="w-full">
                  <button
                    className="w-full btn hover:border-primary"
                    onClick={resetBtn}
                  >
                    C
                  </button>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 gap-2">
                {Mapping.operations.map((operation) => {
                  return (
                    <Button
                      key={operation}
                      updateOperation={updateOperation}
                      button={operation}
                    />
                  );
                })}
              </div>
              <div className="col-span-4 grid grid-cols-2 gap-2">
                <div className="w-full">
                  <button
                    className="w-full btn hover:border-primary"
                    onClick={() => updateResult()}
                  >
                    =
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className="w-full btn hover:border-primary"
                    onClick={() => removeLastCharacter()}
                  >
                    <FaBackspace />
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

export default Calculator;
