import Header from "./Header";
import "../styles/MainContent.css";
import { useTranslation } from "react-i18next";

function MainContent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bodyContent">
      <Header />
    </div>
  );
}

export default MainContent;
