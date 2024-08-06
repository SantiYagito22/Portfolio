import { RiMailSendLine } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { useTranslationContext } from "../../LanguageI18n/TranslationProvider";
import { useEffect, useRef, useState } from "react";

function Email() {
  const { t } = useTranslationContext();
  const email = useRef("");
  const [showAlert, setShowAlert] = useState(null);
  const [mailtoLink, setMailtoLink] = useState('')

  async function copyEmail() {
    try {
      await window.navigator.clipboard
        .writeText(email.current.textContent)
        .then(() => {
          setShowAlert(1);
          setTimeout(() => setShowAlert(null), 3000);
        });
    } catch (error) {
      setShowAlert(2);
      setTimeout(() => setShowAlert(null), 3000);
    }
  }

  useEffect(() => {
    setMailtoLink(`mailto:${
      email.current.textContent
    }?subject=${encodeURIComponent("")}&body=${encodeURIComponent("")}`)
  }, [])

  return (
    <div className="emailContent">
      <span className="emailText" ref={email}>
        santiyagito22@gmail.com
      </span>
      <a href={mailtoLink} aria-label={t('prepareEmail')}>
        <span className="emailIcon" aria-hidden>
          <RiMailSendLine aria-hidden/>
        </span>{" "}
      </a>
      <span className="emailIcon" onClick={copyEmail} aria-label={t('copyEmail')}>
        <FaRegCopy aria-hidden/>
      </span>
      {showAlert && (
        <div
          className={`customAlert ${showAlert === 2 ? "customAlertFail" : ""}`}
        >
          {showAlert === 1 ? t("okCopyEmail") : t("errorCopyEmail")}
        </div>
      )}
    </div>
  );
}

export default Email;
