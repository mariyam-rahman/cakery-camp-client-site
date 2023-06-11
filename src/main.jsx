import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main.jsx";
import Home from "./pages/Home";
import Classes from "./pages/Classes/Classes";
import Instructors from "./pages/Instructors/Instructors";
// import Dashboard from "./Layout/Dashboard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound";
// import Student from "./pages/Dashboard/Student/Student";
// import Admin from "./pages/Dashboard/Admin/Admin";
// import Instructor from "./pages/Dashboard/InstructorBoard/Instructor";

import AuthProvider from "./AuthProvider";

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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound></NotFound>,
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    // children: [
    // {
    //   path: "student",
    //   element: <Student></Student>,
    // },
    // {
    //   path: "admin",
    //   element: <Admin></Admin>,
    // },
    // {
    //   path: "instructor",
    //   element: <Instructor></Instructor>,
    // },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
