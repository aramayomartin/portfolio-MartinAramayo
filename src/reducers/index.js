const initialState = {
  currentTheme: true,
  englishLanguage: false,
};

export default function rootReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "CHANGE-THEME":
      return {
        ...state,
        currentTheme: payload,
      };
    case "CHANGE-LANGUAGE":
      return {
        ...state,
        englishLanguage: payload,
      };
    default:
      return state;
  }
}
