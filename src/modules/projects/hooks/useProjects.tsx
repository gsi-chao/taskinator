import { useCallback } from "react";
import { Project } from "../types/project";

const useProjects = () => {
  const create = (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const id = Math.random().toString(36).substring(2, 11);
    const createdAt = Date.now();
    const _project = {
      id,
      createdAt,
      updatedAt: createdAt,
      ...project,
    };
    const projects = localStorage.getItem("projects");
    if (projects) {
      const parsedProjects = JSON.parse(projects) as Project[];
      localStorage.setItem(
        "projects",
        JSON.stringify([...parsedProjects, _project])
      );
    } else {
      localStorage.setItem("projects", JSON.stringify([_project]));
    }
  };

  const get = (id: string): Project | null => {
    const projects = localStorage.getItem("projects");
    if (projects) {
      const parsedProjects = JSON.parse(projects) as Project[];
      return parsedProjects.find((project) => project.id === id) ?? null;
    }
    return null;
  };

  const update = (id: string, project: Partial<Omit<Project, "id">>): void => {
    const projects = localStorage.getItem("projects");
    if (projects) {
      const parsedProjects = JSON.parse(projects) as Project[];
      const updatedProjects = parsedProjects.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            ...project,
            updatedAt: Date.now(),
          };
        }
        return p;
      });
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
    }
    throw new Error("Project not found");
  };

  const remove = (id: string) => {
    const projects = localStorage.getItem("projects");
    if (projects) {
      const parsedProjects = JSON.parse(projects) as Project[];
      const updatedProjects = parsedProjects.filter((p) => p.id !== id);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
    }
  };

  const getAll = useCallback((): Project[] => {
    const projects = localStorage.getItem("projects");
    if (projects) {
      return JSON.parse(projects) as Project[];
    }
    return [];
  }, []);

  return { create, get, update, remove, getAll };
};

export default useProjects;
