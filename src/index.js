import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS GOVBR
import "@govbr-ds/core/dist/core.min.css";
import "@govbr-ds/core/dist/core-tokens.min.css";

// CSS customizado
import "./styles/overrides.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
