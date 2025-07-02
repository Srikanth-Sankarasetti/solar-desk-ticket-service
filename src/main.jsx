import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProviderWrapper } from "./ui/themeContext.jsx";
import { GlobalProvider } from "./ui/globalContext.jsx";
import { UserProvider } from "./ui/userContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <GlobalProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </GlobalProvider>
    </ThemeProviderWrapper>
  </React.StrictMode>
);
