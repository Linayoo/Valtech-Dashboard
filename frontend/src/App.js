import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SideNav from './components/SideNav/SideNav';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="nav" element={<SideNav />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
