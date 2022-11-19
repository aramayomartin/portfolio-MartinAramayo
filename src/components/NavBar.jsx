import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import style from "../style.module.css";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <div className={`p-3 mx-5 mt-1 opacity-60 ${style.bannerTop}`}>
      <Nav fill pills>
        <NavItem className={style.navItem}>
          <NavLink href="#about-me-section" className="text-white">
            {t("navBar.aboutMe")}
          </NavLink>
        </NavItem>
        <NavItem className={style.navItem}>
          <NavLink href="#tech-stack-section" className="text-white">
            {t("navBar.stack")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skr" className="text-white">
            {t("navBar.projects")}
          </NavLink>
        </NavItem>
        <NavItem className={style.navItem}>
          <NavLink href="#contact-section" className="text-white">
            {t("navBar.contact")}
          </NavLink>
        </NavItem>
        <NavItem>
          <SwitchTheme />
        </NavItem>
        <NavItem>
          <SwitchLanguage />
        </NavItem>
      </Nav>
    </div>
  );
}
