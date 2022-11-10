import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import HomePage from './pages/home/home-page';
import ConsultantCreatePage from "./pages/consultantCreate/consultant-create-page";
import ConsultantDetailsPage from "./pages/consultantDetails/consultant-details-page";
import ConsultantEditPage from "./pages/consultantEdit/consultant-edit-page";
import ProjectsPage from "./pages/projects/projects-page";
import ProjectDetailsPage from "./pages/projectDetails/project-details-page";
import ProfilePage from "./pages/profile/profile";
import EditUserDetails from './pages/EditUserDetails/editUserDetails';
import ProjectCreatePage from "./pages/projectCreate/project-create-page";
import ProjectEditPage from "./pages/projectEdit/project-edit-page";
import InsightsPage from "./pages/insights/insights-page";
import LastTest from "./components/test/createConsultant";
import Test from "./components/test/createProject";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="insights/" element={<InsightsPage/>} />
          <Route path="consultants/" element={<HomePage />} />
          <Route path="/create/consultant" element={<ConsultantCreatePage/>} />
          <Route path="consultant/details" element={<ConsultantDetailsPage />} />
          <Route path="/consultant/edit" element={<ConsultantEditPage />} />
          <Route path="projects/" element={<ProjectsPage />} />
          <Route path="project/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/create/project" element={<ProjectCreatePage/>} />
          <Route path="project/:projectId/edit" element={<ProjectEditPage />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="profile/edit/" element={<EditUserDetails />} />
          <Route path="createConsultantTest/" element={<LastTest />} />
          <Route path="createProjectTest/" element={<Test />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
