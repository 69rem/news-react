import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/appStore.ts";
import { ThemeProvider } from "@/app/providers/ThemeProvider.tsx";
import "./styles/index.css";
import { RouterProvider as Router } from "react-router-dom";
import { appRouter } from "@/app/appRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Router router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
