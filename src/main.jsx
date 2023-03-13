import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
