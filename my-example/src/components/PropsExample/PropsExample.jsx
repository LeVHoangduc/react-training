import Children from "./Children";

function Props() {
  let a = 5;

  return (
    <>
      <button
        onClick={() => {
          a++;
          console.log("call", a);
        }}>
        Click
      </button>
      <Children number={a} />
    </>
  );
}

export default Props;
