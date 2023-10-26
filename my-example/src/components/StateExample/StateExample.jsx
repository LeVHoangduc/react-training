import React, { useState } from "react";

function StateExample() {
  const [number, setNumber] = useState(5);
  //   const [object, setObject] = useState({});

  // console.log(object);
  console.log("example re-render");
  return (
    <div>
      {/* <button onClick={() => setNumber(number + 1)}>Increment Number</button> */}
      <button onClick={() => setNumber(5)}>Increment Number</button>
      {/* <button onClick={() => setObject({})}>set object</button>     */}
    </div>
  );
}
export default StateExample;
