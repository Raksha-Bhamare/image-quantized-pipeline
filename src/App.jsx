import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Workflow from "./pages/Workflow";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      {page === "dashboard" && (
        <Dashboard onContinue={() => setPage("workflow")} />
      )}

      {page === "workflow" && (
        <Workflow />
      )}
    </>
  );
}

export default App;