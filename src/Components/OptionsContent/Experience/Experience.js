import { forwardRef } from "react";

function Experience({}, ref) {

  return (
    <div>
      <h2 ref={ref}>Experiencia</h2>
    </div>
  );
}

export default forwardRef(Experience);