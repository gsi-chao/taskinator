import { KanbanBoard } from "@/core/components/kanboard/KanbanBoard";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { Project } from "../types/project";

const TaskContainer: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const { get } = useProjects();
  const { id } = useParams<{ id: string }>();

  const getProject = useCallback(() => {
    if (id) {
      const project = get(id);
      if (project) {
        setProject(project);
      }
    }
  }, [id, get]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  return !project ? (
    <div></div>
  ) : (
    <div className="flex flex-col justify-center items-start gap-4 w-full">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-500">{project.description}</p>
      </div>

      <div className="w-full flex items-start">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default TaskContainer;
