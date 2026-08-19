import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import LanguageProvider from "./context/LanguageProvider";

import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
