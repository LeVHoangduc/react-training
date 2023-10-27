import Array from "./Array";
import Example from "./components/Example/Example";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import HOC from "./components/HOCexample/HOCexample";
import UseMemoExample from "./components/ReactMemo/UseMemoExample";
import StateExample from "./components/StateExample/StateExample";
import StateExampleCombine from "./components/StateExample/StateExampleCombine";

import { Routes, Route } from "react-router-dom"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/thinkInReact" element={<FilterableProductTable products={PRODUCTS} />} />
      {/* Example for array in state    */}
      <Route path="/array" element={<Array />} />
      {/* Example for HOC               */}
      <Route path="/HOC" element={<HOC />} />
      {/* Example for useMemo           */}
      <Route path="/useMemo" element={<UseMemoExample />} />
      {/* Example for state problems           */}
      <Route path="/stateProblems" element={<StateExample />} />
      <Route path="/stateCombine" element={<StateExampleCombine />} />

    </Routes>

  </>);
}
