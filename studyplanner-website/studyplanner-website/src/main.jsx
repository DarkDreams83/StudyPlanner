import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("StudySprout could not find its root element.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
