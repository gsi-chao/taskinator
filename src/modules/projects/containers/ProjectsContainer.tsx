import CreateProjectContainer from "../components/projects/forms/CreateProjectContainer";
import ProjectListContainer from "../components/projects/list/ProjectListContainer";

const ProjectsContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-cente mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <CreateProjectContainer />
      </div>

      <ProjectListContainer />
    </div>
  );
};

export default ProjectsContainer;
