export function changeTheme(currentTheme) {
  return {
    type: "CHANGE-THEME",
    payload: !currentTheme,
  };
}

export function changeLanguage(englishLanguageStatus) {
  return {
    type: "CHANGE-LANGUAGE",
    payload: !englishLanguageStatus,
  };
}
