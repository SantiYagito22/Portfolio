import { use } from "i18next";
import "../styles/SideBar.css";
import ProfilePictures from "./imgs/ProfilePictures";
import { useTranslationContext } from "./LanguageI18n/TranslationProvider";
import { useState } from "react";

function SideBar() {
  const { t } = useTranslationContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sideOptions = [
    t("home"),
    t("aboutMe"),
    t("experience"),
    t("education"),
    t("skills"),
    t("contact"),
  ];

  return (
    <div className="leftBar-content">
      <ProfilePictures />
      <ul>
        {sideOptions.map((option, index) => (
          <li
            className={currentIndex === index ? "optionSelected" : ""}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index);
              }
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
