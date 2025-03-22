import React from "react";
import ReactDOM from "react-dom/client";
import "@/shared/index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
