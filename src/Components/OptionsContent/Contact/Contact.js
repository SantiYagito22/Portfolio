import { forwardRef } from "react";

function Contact({}, ref) {

  return (
    <div style={{marginTop: 5000}}>
      <h2 ref={ref}>Contacto</h2>
    </div>
  );
}

export default forwardRef(Contact);