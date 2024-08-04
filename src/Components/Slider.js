import { useEffect, useState} from "react";
import "../styles/Slider.css";
import { useTranslationContext } from "./LanguageI18n/TranslationProvider";

function Slider(props) {
  const [theme, setTheme] = useState(props.initTheme);
  const { t } = useTranslationContext();
  const [arialMessage, setArialMessage] = useState(theme === 'dark' ? t('changeToLight') : t('changeLanguage'))
  const handleChange = (e) => {
    setTheme(e.target.checked ? props.type1 : props.type2);
    props.functionChange();
  };

  useEffect(() => {
    props.functionChange(theme);
  }, [theme]);

  useEffect(() => {
    if(props.type1 === 'dark'){
      if(theme === 'dark'){
        setArialMessage(t('changeToLight'))
      }
      else{
        setArialMessage(t('changeToDark'))
      }
    }
    else{
      setArialMessage(t('changeLanguage'))
    }
  })

  return (
    <div className="themeSelector">
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === props.type1}
          aria-label={arialMessage}
        />
        <span>
          <i className="iconSlider"></i>
          <props.icon1
            className={`${props.style1} ${
              theme === props.type1 ? "transparent" : ""
            }`}
            aria-hidden
          />
          <props.icon2
            className={`${props.style2} ${
              theme === props.type2 ? "transparent" : ""
            }`}
            aria-hidden
          />
        </span>
      </label>
    </div>
  );
}

export default Slider;
