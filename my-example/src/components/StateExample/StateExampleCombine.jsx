import React, { useState } from "react";

function MyComponent(props) {
  console.log("Rendering MyComponent");
  return <div>{props.value}</div>;
}

function equal(prevProp, nextProp) {
  console.log(prevProp, nextProp);
  if (prevProp.value === nextProp.value) return true;
  return false;
}
const MemoComponent = React.memo(MyComponent, equal);

function StateExampleCombine() {
  const [number, setNumber] = useState(5);
  const [object, setObject] = useState({});

  // console.log(object);
  console.log("example re-render");

  const handleOnclick = () => {
    setNumber(number + 1);
    setObject({});
  };

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      {/* <button onClick={() => setNumber(5)}>Increment Number</button> */}
      <button onClick={() => handleOnclick()}>set object</button>

      <MemoComponent value={number <= 9 ? number : 9} object={object} />
    </div>
  );
}
export default StateExampleCombine;
