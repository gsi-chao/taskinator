export type Task = {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  assingnedTo: string;
  status: TaskStatus;
  content: string; // using novel content field
  createdAt: string;
  updatedAt: string;
  projectId: string;
};

export type TaskStatus = "OPEN" | "IN_PROGRESS" | "DONE";
