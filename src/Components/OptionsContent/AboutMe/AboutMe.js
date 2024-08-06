import { forwardRef } from "react";

function AboutMe({}, ref) {

  return (
    <div >
      <h2 ref={ref}></h2>
    </div>
  );
}

export default forwardRef(AboutMe);