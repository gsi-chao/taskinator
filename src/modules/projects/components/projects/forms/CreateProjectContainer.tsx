import { Form } from "@/core/components/ui/form";
import useProjects from "@/modules/projects/hooks/useProjects";
import { Project } from "@/modules/projects/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CreateProjectSheet } from "./CreateProjectSheet";
import { CreateProjectSchema } from "./schemas";

type Props = {
  onReadySubmitForm?: (data: Project) => void;
};

const CreateProjectContainer: React.FC<Props> = ({ onReadySubmitForm }) => {
  const { create } = useProjects();
  const form = useForm<Project>({
    resolver: zodResolver(CreateProjectSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmitForm = (data: Project) => {
    try {
      create(data);
      onReadySubmitForm?.(data);
      toast.success("Event has been created.");
    } catch (error) {
      toast.error("There was an error creating the project.");
    }
  };

  return (
    <Form {...form}>
      <CreateProjectSheet onSubmitForm={onSubmitForm} />
    </Form>
  );
};
export default CreateProjectContainer;
