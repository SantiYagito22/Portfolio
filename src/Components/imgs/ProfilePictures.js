import { useRef, useState } from "react";
import "./styles/ProfilePicture.css";
import ProfilePhoto1 from "../../Resources/ProfilePhoto1.jpg";
import ProfilePhoto2 from "../../Resources/ProfilePhoto2.jpg";
import { TbArrowBigLeft } from "react-icons/tb";
import { TbArrowBigRight } from "react-icons/tb";
import ImageSlider from "./ImageSlider.js";
import { useTranslationContext } from "../LanguageI18n/TranslationProvider";

function ProfilePictures() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [ProfilePhoto1, ProfilePhoto2];
  const { t } = useTranslationContext();

  function changeImage(toTheRight) {
    let val = 0;

    if (toTheRight) {
      val = (imageIndex + 1) % images.length;
    } else {
      val = (imageIndex - 1) % images.length;
      if(val < 0) {
        val= images.length - 1
      }
    }
    setImageIndex(val);
  }

  return (
    <>
      <section aria-label={t("sectionProfile")} className="externalCircle">
        <ImageSlider imageUrls={images} index={imageIndex} />
        <button
          className="buttonPhotos left"
          onClick={() => changeImage(false)}
          aria-label={t("backPhotoArrow")}
        >
          <TbArrowBigLeft aria-hidden/>
        </button>
        <button
          className="buttonPhotos right"
          onClick={() => changeImage(true)}
          aria-label={t("nextPhotoArrow")}
        >
          <TbArrowBigRight aria-hidden />
        </button>
      </section>
    </>
  );
}

export default ProfilePictures;
