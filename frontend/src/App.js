import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import HomePage from './pages/home/home-page';
import ProjectsPage from "./pages/projects/projects-page";
import ProjectDetailsPage from "./pages/projectDetails/project-details-page";
import ProfilePage from "./pages/profile/profile-page";
import InsightsPage from "./pages/insights/insights-page";


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
          <Route path="profile/" element={<ProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
