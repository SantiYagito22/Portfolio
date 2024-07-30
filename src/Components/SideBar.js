import "../styles/SideBar.css";
import ProfilePictures from "./imgs/ProfilePictures";
import { useTranslationContext } from "./LanguageI18n/TranslationProvider";

function SideBar() {
  const { t } = useTranslationContext();

  return (
    <div className="leftBar-content">
      <ProfilePictures />
      <ul>
        <li>{t("home")}</li>
        <li>{t("experience")}</li>
      </ul>
    </div>
  );
}

export default SideBar;
