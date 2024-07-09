import { EyeIcon } from "lucide-react";

import { Button } from "@/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import { cn } from "@/core/lib/utils";
import { Project } from "@/modules/projects/types/project";
import { Task } from "@/modules/projects/types/task";

type CardProps = {
  project: Project;
  lastTask?: Task[];
} & React.ComponentProps<typeof Card>;

const ProjectListCard = ({
  className,
  project,
  lastTask,
  ...props
}: CardProps) => {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <span className="text-lg font-semibold text-gray-700">
          Recent Tasks
        </span>
        <div>
          {!lastTask && (
            <p className="text-sm text-muted-foreground">
              No tasks found for this project
            </p>
          )}
          {lastTask?.map((task, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{task.name}</p>
                <p className="text-sm text-muted-foreground">
                  {task.createdBy} created {task.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <EyeIcon className="mr-2 h-4 w-4" /> See More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectListCard;
