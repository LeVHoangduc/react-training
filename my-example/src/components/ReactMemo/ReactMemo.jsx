import React from "react";

// Regular functional component
function MyComponent(props) {
  console.log("Rendering MyComponent");
  return <div>{props.value}</div>;
}

// Wrap MyComponent with React.memo
const MemoizedMyComponent = React.memo(MyComponent);

function App() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <MemoizedMyComponent value={count} />
      <div>
        <h1>title</h1>
      </div>
    </div>
  );
}

export default App;
