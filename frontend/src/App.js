import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import HomePage from './pages/home/home-page';
import ProjectsPage from "./pages/projects/projects-page";
import ProjectDetailsPage from "./pages/projectDetails/project-details-page";
import ProfilePage from "./pages/profile/profile-page";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home/" element={<HomePage />} />
          <Route path="projects/" element={<ProjectsPage />} />
          <Route path="project-details/" element={<ProjectDetailsPage />} />
          <Route path="profile/" element={<ProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
