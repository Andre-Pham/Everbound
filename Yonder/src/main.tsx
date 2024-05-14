import "./fonts.css";
import React from "react";
import ReactDOM from "react-dom/client";
import HomeScreen from "./components/screens/App.tsx";
import { ColorThemeProvider } from "./components/providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ColorThemeProvider>
            <HomeScreen />
        </ColorThemeProvider>
    </React.StrictMode>,
);
