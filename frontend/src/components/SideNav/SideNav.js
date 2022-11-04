import { NavContainer } from "./SideNav.styles"
import { BsPersonPlus, BsClipboardData, BsJournalCheck, BsFilePerson } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const SideNav = () => {

    const url = useLocation()
    const navigate = useNavigate();

    const toConsultants = () => {
        navigate('/toconsultantsorsomething/')
    }

    const toInsights = () => {
        navigate('/dashboardorsomething')
    }

    const toProjects = () => {
        navigate('/projects')
    }

    const toProfile = () => {
        navigate('/toprofileorsomething')
    }

    return (
        <NavContainer>
            <p>{console.log(url)}</p>
            <h1>Valtech_</h1>
            {/*url.pathname === '/projects'  ? 'renderbutton with styling' : 'render button without styling'*/}
            <button onClick={toConsultants}><p><BsPersonPlus size={20}/></p>Consultants</button>
            <button onClick={toInsights}><p><BsClipboardData size={20}/></p>Insights</button>
            <button onClick={toProjects}><p><BsJournalCheck size={20}/></p>Projects</button>
            <button onClick={toProfile}><p><BsFilePerson size={20}/></p>Profile</button>
        </NavContainer>
    )
}

export default SideNav
