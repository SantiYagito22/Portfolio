import { forwardRef } from "react";

function Home({}, ref) {

  return (
    <div>
      <h2 ref={ref}>HOLA mundo</h2>
    </div>
  );
}

export default forwardRef(Home);