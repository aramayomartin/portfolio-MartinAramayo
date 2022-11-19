import React from "react";
import { Container } from "reactstrap";
import style from "../style.module.css";
import profile from "../images/profile.jpg";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <Container id="about-me-section" className={`px-5 pt-5 ${style.aboutMe}`}>
      <h1>{t("aboutMe.title")}</h1>
      <div className={style.aboutMeElements}>
        <img src={profile} alt="profile" className={style.profileImage} />
        <h3>
          Martín Aramayo
          <br />
          Ing. Nuclear || Full Stack Dev.
        </h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: t("aboutMe.presentation") }} />
    </Container>
  );
}
