import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; 
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ini adalah elemen DOM tempat aplikasi React akan dirender
);

// Ini adalah bagian opsional untuk melacak kinerja aplikasi
reportWebVitals();
