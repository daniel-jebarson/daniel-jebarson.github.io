import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/activity",
      element: <ActivityPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
