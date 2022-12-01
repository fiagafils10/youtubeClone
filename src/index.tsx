import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoryContextProvider from "./context/CategoryContext";
import VideosContextProvider from "./context/VideosContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CategoryContextProvider>
    <VideosContextProvider>
      <App />
    </VideosContextProvider>
  </CategoryContextProvider>
);
