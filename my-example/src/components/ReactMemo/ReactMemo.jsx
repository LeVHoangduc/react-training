import React from "react";

// Regular functional component
function MyComponent(props) {
  console.log("Rendering MyComponent");
  return <div>{props.value}</div>;
}

// Wrap MyComponent with React.memo
const MemoizedMyComponent = React.memo(MyComponent);
const MemoizedMyComponent2 = React.memo(MyComponent, equal);

function equal(prevProps, nextProps) {
  if (prevProps.value === nextProps.value) return true;
  return false;
}

// React.memo() memoizes the rendered output of MyComponent based on its props.
// When the count state changes, MyComponent will only re-render if its value prop changes

function App() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <MemoizedMyComponent value={count} />
      <MemoizedMyComponent2 value={count} />
    </div>
  );
}

export default App;
