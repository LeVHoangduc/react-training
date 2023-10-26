import React, { useState, useMemo, memo } from "react";

const Calculator = memo(function ({ number }) {
  console.log(number);
  // Define a memoized function to calculate the factorial
  const calculateFactorial = useMemo(() => {
    let factorial = number + 2;
    return factorial;
  }, [number]); // Recalculate when the 'number' prop changes

  console.log("Calculator re-render");
  return (
    <div>
      <p>
        Factorial of {number} is: {calculateFactorial}
      </p>
    </div>
  );
});

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [object, setObject] = useState({});

  // console.log(object);
  console.log("useMemo re-render");
  return (
    <div>
      {/* <button onClick={() => setNumber(number + 1)}>Increment Number</button> */}
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setObject({ name: "hey" })}>set object</button>

      {/*it will skip re-rendering if all of its props are the same as on the last render. */}
      <Calculator number={number} />
      {/*it still will re-rendering because of object changes */}
      {/* <Calculator number={number} object={object} /> */}
    </div>
  );
}

export default UseMemoExample;
