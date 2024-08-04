import { use } from "i18next";
import "../styles/SideBar.css";
import { useContext } from 'react';
import ProfilePictures from "./imgs/ProfilePictures";
import { useTranslationContext } from "./LanguageI18n/TranslationProvider";

import { CurrentIndexContext } from "./CurrentIndexProvider";

function SideBar() {
  const { t } = useTranslationContext();
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
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
      <ul aria-label={t('optionList')}>
        {sideOptions.map((option, index) => (
          <li
          key={index}
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
