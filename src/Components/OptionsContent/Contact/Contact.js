import { forwardRef } from "react";

function Contact({}, ref) {

  return (
    <div>
      <h2 ref={ref}></h2>
    </div>
  );
}

export default forwardRef(Contact);