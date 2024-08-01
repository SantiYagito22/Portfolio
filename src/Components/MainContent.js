import { useRef, useContext, useEffect } from "react";
import Header from "./Header";
import Home from "./OptionsContent/Home/Home";
import AboutMe from "./OptionsContent/AboutMe/AboutMe";
import Experience from "./OptionsContent/Experience/Experience";
import Education from "./OptionsContent/Education/Education";
import Skills from "./OptionsContent/Skills/Skills";
import Contact from "./OptionsContent/Contact/Contact";
import "../styles/MainContent.css";
import { useTranslationContext } from "./LanguageI18n/TranslationProvider";
import { Component, useState } from "react";
import { CurrentIndexContext } from "./CurrentIndexProvider";

function MainContent() {
  const ref = useRef(null);
  const { t } = useTranslationContext();
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);

  const topics = [
    { Component: Home },
    { Component: AboutMe },
    { Component: Experience },
    { Component: Education },
    { Component: Skills },
    { Component: Contact },
  ];

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth'})
  }, [currentIndex]);

  return (
    <div className="bodyContent">
      <Header />
      <div className="optionsContent">
        {topics.map(({ Component }, index) => (
          <Component key={index} ref={currentIndex === index ? ref : null} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
