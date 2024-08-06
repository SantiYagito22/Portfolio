import { forwardRef } from "react";

function Experience({}, ref) {

  return (
    <div>
      <h2 ref={ref}></h2>
    </div>
  );
}

export default forwardRef(Experience);