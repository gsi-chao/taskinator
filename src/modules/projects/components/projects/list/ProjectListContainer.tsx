import useProjects from "@/modules/projects/hooks/useProjects";
import { Project } from "@/modules/projects/types/project";
import { useEffect, useState } from "react";
import { _projects } from "../mock/_projects";
import ProjectList from "./ProjectList";

const ProjectListContainer: React.FC = () => {
  const { getAll } = useProjects();
  const [projects, setProjects] = useState<Project[]>(_projects);

  useEffect(() => {
    const projects = getAll();
    if (projects && projects.length > 0) setProjects(projects);
  }, [getAll]);

  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
