import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import { store } from "@/app/appStore.ts";
import { ThemeProvider } from "@/app/providers/ThemeProvider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
