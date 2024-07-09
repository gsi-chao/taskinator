import { RouterProvider } from "react-router-dom";
import { TooltipProvider } from "./core/components/ui/tooltip";
import router from "./core/router/router";

function App() {
  return (
    <>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </>
  );
}

export default App;
