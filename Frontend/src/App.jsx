import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import Admin from "./Pages/Admin";
import Overview from "./Components/Admin/Overview";
import EduAdmin from "./Components/Admin/EduAdmin";
import PrivateRouter from "./../utils/PrivateRouter"; // ✅ cleaner import
import ProjectPage from "./Components/Admin/ProjectAdmin";
import { DataProvider } from "./Context/AllData";

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen min-w-full bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRouter>
                <Admin />
              </PrivateRouter>
            }
          >
            <Route index element={<Overview />} />
            <Route path="dashboard" element={<Overview />} />
            <Route path="education" element={<EduAdmin />} />
            <Route path="projects" element={<ProjectPage />} />
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
