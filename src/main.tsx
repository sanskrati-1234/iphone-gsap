import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import GsapTo from "./pages/GsapTo.tsx";
//import GsapFrom from "./pages/GsapFrom.tsx";
// import GsapFromTo from "./pages/GsapFromTo.tsx";
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <GsapTo /> */}
    {/* <GSAPTimeline /> */}
    <App />
  </React.StrictMode>
);
