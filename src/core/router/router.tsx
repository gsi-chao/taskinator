import { createBrowserRouter, Outlet } from "react-router-dom";

import { Root } from "@/core/template/Root";
import ProtectedRoutes from "./protected-routes";
import {
  ProjectsContainer,
  SignInContainer,
  SignUpContainer,
} from "./router-imports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <Root />
          </ProtectedRoutes>
        ),
        children: [
          {
            index: true,
            element: <ProjectsContainer />,
          },
          {
            path: "projects",
            element: <ProjectsContainer />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInContainer />,
      },
      {
        path: "sign-up",
        element: <SignUpContainer />,
      },
    ],
  },
]);

export default router;
