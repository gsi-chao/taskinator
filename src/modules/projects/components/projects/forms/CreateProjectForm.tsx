import { useFormContext } from "react-hook-form";

const CreateProjectForm = () => {
  const { control } = useFormContext();
  return (
    <form>
      <input {...control.register("name")} />
      <input {...control.register("description")} />
      <input {...control.register("createdAt")} />
      <input {...control.register("updatedAt")} />
    </form>
  );
};

export default CreateProjectForm;
