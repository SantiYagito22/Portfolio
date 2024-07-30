import { useState } from "react";
import "./styles/ImageSlider.css";
import { useTranslationContext } from "../LanguageI18n/TranslationProvider";

function ImageSlider(props) {
  const { t } = useTranslationContext();

  return (
    <div className="imageContainer">
      {props.imageUrls.map((url, index) => (
        <img
          key={url}
          src={url}
          className="imageContent"
          style={{ translate: `${-100 * props.index}%` }}
          alt={`${t('profilePhoto')} ${index + 1}`}
          aria-hidden={props.index !== index}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
