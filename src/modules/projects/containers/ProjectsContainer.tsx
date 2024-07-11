import { useCallback, useEffect, useState } from "react";
import CreateProjectContainer from "../components/projects/forms/CreateProjectContainer";
import ProjectListContainer from "../components/projects/list/ProjectListContainer";
import useProjects from "../hooks/useProjects";
import { Project } from "../types/project";

const ProjectsContainer = () => {
  const { getAll } = useProjects();
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = useCallback(() => {
    const projects = getAll();

    if (projects && projects.length > 0) setProjects(projects);
  }, [getAll]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-cente mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <CreateProjectContainer onReadySubmitForm={() => getProjects()} />
      </div>
      <ProjectListContainer projects={projects} />
    </div>
  );
};

export default ProjectsContainer;
