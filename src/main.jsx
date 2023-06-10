import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main.jsx";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Instructors from "./pages/Instructors/Instructors";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound";
import Student from "./pages/Dashboard/Student/Student";
import Admin from "./pages/Dashboard/Admin/Admin";
import Instructor from "./pages/Dashboard/InstructorBoard/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/student",
            element: <Student></Student>,
          },
          {
            path: "/dashboard/admin",
            element: <Admin></Admin>,
          },
          {
            path: "/dashboard/instructor",
            element: <Instructor></Instructor>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
