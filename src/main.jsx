import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

import "./styles/globals.css";

import { setupInterceptors } from "./shared/api/interceptors";


setupInterceptors();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);