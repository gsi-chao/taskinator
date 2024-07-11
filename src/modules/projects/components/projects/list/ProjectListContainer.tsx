import { Project } from "@/modules/projects/types/project";
import ProjectList from "./ProjectList";

type Props = {
  projects: Project[];
};

const ProjectListContainer: React.FC<Props> = ({ projects }) => {
  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
