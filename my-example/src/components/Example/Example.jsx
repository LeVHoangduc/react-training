import { Link } from "react-router-dom";

function Example() {
  return (
    <>
      <Link to="/thinkInReact">
        <p>ThinkInReact Example</p>
      </Link>
      <Link to="/HOC">
        <p>HOC Example</p>
      </Link>
      <Link to="/useMemo">
        <p>useMemo Example</p>
      </Link>
      <Link to="/stateProblems">
        <p>stateProblems Example</p>
      </Link>
      <Link to="/stateCombine">
        <p>stateCombine Example</p>
      </Link>
      <Link to="/props">
        <p>props Example</p>
      </Link>
    </>
  );
}

export default Example;
