import "./fonts.css";
import React from "react";
import ReactDOM from "react-dom/client";
import HomeScreen from "./components/screens/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HomeScreen />
    </React.StrictMode>,
);
