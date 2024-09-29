import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Covid19 from "./pages/Covid19";
import SearchResult from "./pages/SearchResult";
import SavedNews from "./pages/SavedNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "covid-19",
        element: <Covid19 />,
      },
      {
        path: "search",
        element: <SearchResult />,
      },
      {
        path: "saved",
        element: <SavedNews />,
      },
      
    ],
  },
]);

export default router;
