import { Project } from "@/modules/projects/types/project";
import ProjectListCard from "./ProjectListCard";

type Props = {
  projects: Project[];
};

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="flex justify-start items-start gap-4 flex-wrap">
      {projects.map((project) => (
        <ProjectListCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
