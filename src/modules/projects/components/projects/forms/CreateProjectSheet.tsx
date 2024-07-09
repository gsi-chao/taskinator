import { Button } from "@/core/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/core/components/ui/sheet";
import CreateProjectForm from "./CreateProjectForm";

export function CreateProjectSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create Project</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Project</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <CreateProjectForm />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" form="project-form">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
