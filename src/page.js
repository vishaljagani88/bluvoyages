import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/fontawesome.all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = () => {
  const rootElement = typeof window !== "undefined" ? document.getElementById("root") : null;

  if (!rootElement) {
    // Return null or a loading state on the server-side
    return null;
  }

  const root = ReactDOM.createRoot(rootElement);

  // Render your application on the client-side
  debugger;
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  return null;
};

export default Page;
