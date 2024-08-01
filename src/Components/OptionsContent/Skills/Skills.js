import { forwardRef } from "react";

function Skills({}, ref) {

  return (
    <div>
     <h2 ref={ref}>Destrezas</h2>
    </div>
  );
}

export default forwardRef(Skills);