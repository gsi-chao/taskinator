import { Button } from "@/core/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/components/ui/sheet";
import { Project } from "@/modules/projects/types/project";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

type Props = {
  onSubmitForm: (data: Project) => void;
};

export function CreateProjectSheet({ onSubmitForm }: Props) {
  const [open, setOpen] = useState(false);

  const submitForm = (data: Project) => {
    setOpen(false);
    onSubmitForm(data);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)}>Create Project</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Project</SheetTitle>
          <SheetDescription>
            Fill in the form below to create a new project.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <CreateProjectForm onSubmitForm={submitForm} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
