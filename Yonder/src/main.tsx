import "./fonts.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ColorThemeProvider } from "./components/providers/ThemeProvider.tsx";
import TitleProvider from "./components/providers/TitleProvider.tsx";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import RouterNavigator from "./services/RouterNavigator.ts";
import HomeScreen from "./components/screens/HomeScreen.tsx";

// For more about routing:
// https://reactrouter.com/en/main/start/tutorial

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ColorThemeProvider>
            <Router>
                <TitleProvider>
                    <Routes>
                        <Route path={RouterNavigator.HOME_PATH} element={<HomeScreen />} />
                        {/* Invalid paths redirect to root */}
                        <Route path="*" element={<Navigate to={RouterNavigator.HOME_PATH} />} />
                    </Routes>
                </TitleProvider>
            </Router>
        </ColorThemeProvider>
    </React.StrictMode>,
);
