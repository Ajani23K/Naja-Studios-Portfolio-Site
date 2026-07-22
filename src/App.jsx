import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/homepage";
import WorksPage from "@/pages/workspage";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </div>
  );
};

export default App;