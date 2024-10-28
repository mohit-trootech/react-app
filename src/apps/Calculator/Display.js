/**Calculator Display */

function Display({ result, calculation }) {
  /**Calculator Display Component */
  return (
    <>
      <div className="w-full font-mono shadow py-5 px-6 text-6xl font-thin bg-base-300 rounded-xl">
        {result || 0}
      </div>
      <div className="flex items-center justify-end mt-5 w-full gap-x-3">
        Actions
        <p className="bg-base-200 rounded-xl px-2 py-1 w-96">
          {calculation || 0}
        </p>
      </div>
    </>
  );
}

export default Display;
