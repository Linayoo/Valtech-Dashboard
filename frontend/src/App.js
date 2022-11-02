import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SideNav from './components/SideNav/SideNav';
import HomePage from './pages/home/home-page';
import ProjectsPage from "./pages/projects/projects-page";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home/" element={<HomePage />} />
          <Route path="projects/" element={<ProjectsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
