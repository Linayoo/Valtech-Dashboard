import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import HomePage from './pages/home/home-page';
import ProjectsPage from "./pages/projects/projects-page";
import ProjectDetailsPage from "./pages/projectDetails/project-details-page";
import ProjectCreatePage from "./pages/projectCreate/project-create-page";
import ProjectEditPage from "./pages/projectEdit/project-edit-page";
import ProfilePage from "./pages/profile/profile-page";
import InsightsPage from "./pages/insights/insights-page";
import Test from "./components/test/test";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="insights/" element={<InsightsPage/>} />
          <Route path="home/" element={<HomePage />} />
          <Route path="projects/" element={<ProjectsPage />} />
          <Route path="project/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/create" element={<ProjectCreatePage/>} />
          <Route path="project/:projectId/edit" element={<ProjectEditPage />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="test/" element={<Test />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
