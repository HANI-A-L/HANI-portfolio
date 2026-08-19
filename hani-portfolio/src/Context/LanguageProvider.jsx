import { useEffect, useState } from "react";

import LanguageContext from "./LanguageContext";

import en from "../locales/en";
import fa from "../locales/fa";

const languages = {
  en,
  fa,
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const isRTL = language === "fa";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "fa" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isRTL,
    t: languages[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
