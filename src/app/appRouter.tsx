import { createBrowserRouter, Link } from "react-router-dom";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import { MainPage } from "@/pages/main";
import { NewsPage } from "@/pages/news";
import "./styles/errorElement.css";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: (
      <div className="error">
        Error, please return to <br />
        <Link to={`/`}>
          <b>Home page</b>
        </Link>
      </div>
    ),
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/news/:id", element: <NewsPage /> },
    ],
  },
]);
