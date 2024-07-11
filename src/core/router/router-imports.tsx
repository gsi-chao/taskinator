import { lazy } from "react";

export const ProjectsContainer = lazy(
  () => import("@/modules/projects/containers/ProjectsContainer")
);

export const TasksContainer = lazy(
  () => import("@/modules/projects/containers/TasksContainer")
);

export const SignInContainer = lazy(
  () => import("@/modules/security/containers/SignInContainer")
);

export const SignUpContainer = lazy(
  () => import("@/modules/security/containers/SignUpContainer")
);
