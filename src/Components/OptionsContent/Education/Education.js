import { forwardRef } from "react";

function Education({}, ref) {

  return (
    <div>
      <h2 ref={ref}>Educación</h2>
    </div>
  );
}

export default forwardRef(Education);