import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CreateProjectSheet } from "./CreateProjectSheet";
import { CreateProjectSchema } from "./schemas";

const CreateProjectContainer = () => {
  const form = useForm({
    resolver: zodResolver(CreateProjectSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      createdAt: "",
      updatedAt: "",
    },
  });

  return (
    <FormProvider {...form}>
      <CreateProjectSheet />
    </FormProvider>
  );
};
export default CreateProjectContainer;
