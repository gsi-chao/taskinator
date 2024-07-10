import { Button } from "@/core/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { Project } from "@/modules/projects/types/project";
import { SubmitHandler, useFormContext } from "react-hook-form";

type Props = {
  onSubmitForm: SubmitHandler<Project>;
};

const CreateProjectForm: React.FC<Props> = ({ onSubmitForm }) => {
  const { control, handleSubmit } = useFormContext<Project>();

  const onSubmit: SubmitHandler<Project> = (data: Project) => {
    console.log('data', data)
    onSubmitForm(data);
  };

  return (
    <form
      name="project-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Project Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Project Description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Save changes</Button>
    </form>
  );
};

export default CreateProjectForm;


