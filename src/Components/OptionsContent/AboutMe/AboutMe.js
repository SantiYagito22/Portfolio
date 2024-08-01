import { forwardRef } from "react";

function AboutMe({}, ref) {

  return (
    <div >
      <h2 ref={ref}>SOY SANTIAGO</h2>
    </div>
  );
}

export default forwardRef(AboutMe);