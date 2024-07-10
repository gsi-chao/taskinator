import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "./core/components/ui/tooltip";
import router from "./core/router/router";

function App() {
  return (
    <>
      <TooltipProvider>
        <Toaster />
        <RouterProvider router={router} />
      </TooltipProvider>
    </>
  );
}

export default App;
