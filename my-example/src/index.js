import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Array from "./Array";
import HOC from "./components/HOCexample/HOCexample";
import UseMemoExample from "./components/ReactMemo/UseMemoExample";
import StateExample from "./components/StateExample/StateExample";
import StateExampleCombine from "./components/StateExample/StateExampleCombine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Example for thinking in React */}
    {/* <App /> */}

    {/* Example for array in state    */}
    {/* <Array /> */}

    {/* Example for HOC               */}
    {/* <HOC /> */}

    {/* Example for useMemo           */}
    <UseMemoExample />

    {/* Example for state problems           */}
    {/* <StateExample /> */}
    {/* <StateExampleCombine /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
