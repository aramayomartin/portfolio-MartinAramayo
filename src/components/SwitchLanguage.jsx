import React from "react";
import { Button } from "reactstrap";
import { MdOutlineLanguage } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// --- ACTIONS ---
import { changeLanguage } from "../actions";
// --- TO EXPORT ---
export default function SwitchLanguage() {
  // --- CONSTANTES ---
  const dispatch = useDispatch();
  const englishLanguage = useSelector((s) => s.englishLanguage);
  const { i18n } = useTranslation();
  // --- FUNCIONES ---
  function handleClick(e) {
    e.preventDefault();
    dispatch(changeLanguage(englishLanguage));
    if (englishLanguage) {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }
  function buildButton() {
    return (
      <>
        <MdOutlineLanguage />
        {englishLanguage ? " ES" : " EN"}
      </>
    );
  }
  // --- TO RETURN ---
  return (
    <div>
      <Button color="info" onClick={handleClick}>
        {buildButton()}
      </Button>
    </div>
  );
}
