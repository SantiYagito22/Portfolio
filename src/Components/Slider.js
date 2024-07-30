import { useEffect, useState, ChangeEvent } from "react";
import "../styles/Slider.css";

function Slider(props) {
  const [theme, setTheme] = useState(props.initTheme);

  const handleChange = (e) => {
    setTheme(e.target.checked ? props.type1 : props.type2);
    props.functionChange();
  };

  useEffect(() => {
    props.functionChange(theme);
  }, [theme]);

  return (
    <div className="themeSelector">
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === props.type1}
        />
        <span>
          <i className="iconSlider"></i>
          <props.icon1
            className={`${props.style1} ${
              theme === props.type1 ? "transparent" : ""
            }`}
          />
          <props.icon2
            className={`${props.style2} ${
              theme === props.type2 ? "transparent" : ""
            }`}
          />
        </span>
      </label>
    </div>
  );
}

export default Slider;
