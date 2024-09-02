import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
