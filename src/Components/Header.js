import { useEffect, useState, ChangeEvent } from "react";
import "../styles/Header.css";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import Slider from "./Slider.js";
import { USAFlag, SPAFlag } from "./FlagIcons/Flags";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  function changeDataTheme(theme) {
    document.body.setAttribute("data-theme", theme);
  }

  function changeLng(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="main_header">
      <Slider
        initTheme={"dark"}
        type1={"dark"}
        type2={"light"}
        icon1={FaMoon}
        style1={"iconSymbolB"}
        icon2={IoIosSunny}
        style2={"iconSymbolA"}
        functionChange={changeDataTheme}
      ></Slider>
      <Slider
        initTheme={"en"}
        type1={"en"}
        type2={"es"}
        icon1={USAFlag}
        style1={"iconSymbolB"}
        icon2={SPAFlag}
        style2={"iconSymbolA"}
        functionChange={changeLng}
      ></Slider>
    </div>
  );
}

export default Header;
