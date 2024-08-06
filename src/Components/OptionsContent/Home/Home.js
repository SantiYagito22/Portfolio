import { forwardRef } from "react";
import "./Home.css";
import { useTranslationContext } from "../../LanguageI18n/TranslationProvider";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Email from "./Email";

function Home({}, ref) {
  const { t } = useTranslationContext();

  return (
    <div>
      <h2 className="homeName" ref={ref}>
        Santiago Muñoz Castro
      </h2>
      <div className="headerContent headerWelcome">
        {t("welcomePortfolio")}
        <span className="highlightedText">
          <Typewriter
            words={[" Front-End", " Back-End", " Full Stack"]}
            loop={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
          <Cursor />
        </span>
        {t("developer")}
      </div>
      <div className="headerContent headerEmail">{t("emailContact")}</div>
      <Email />
      <div className="cvSection">
        <span className="buttonCV" aria-label={t("downloadCV")}>
          {t("downloadCV")}
        </span>
        <p className="or">{t("or")}</p>
        <span className="buttonCV marginLeft" aria-label={t("downloadCV")}>
          {t("openCV")}
        </span>
      </div>
    </div>
  );
}

export default forwardRef(Home);
