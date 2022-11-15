import { NavContainer } from "./SideNav.styles"
import { BsPersonPlus, BsClipboardData, BsJournalCheck, BsFilePerson, BsBoxArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import logo from './sit-learning-logo-white.png' 

const SideNav = () => {
    let tabStyle = {
        backgroundColor: '#360270',
        transform: 'scale(1.1)',
        borderLeft: '2px solid #fafafa8f',
        width: '90%',
        height: '70px',
        color: "white"
     }  
    

    const url = useLocation()
    const navigate = useNavigate();

    const toConsultants = () => {
        navigate('/consultants')
    }

    const toInsights = () => {
        navigate('/insights')
    }

    const toProjects = () => {
        navigate('/projects')
    }

    const toProfile = () => {
        navigate('/profile')
    }

    const logOut = () => {
        localStorage.removeItem('valtech-auth');
        navigate('/');
    }

    return (
        <NavContainer>
            <h1>valtech_</h1>
            <button onClick={toConsultants} style={url.pathname === "/consultants" ? tabStyle:{}} >
                <p><BsPersonPlus size={20}/></p>
            Consultants</button>
            <button onClick={toInsights} style={url.pathname === "/insights" ? tabStyle:{}}>
                <p><BsClipboardData size={20}/></p>
            Insights</button>
            <button onClick={toProjects} style={url.pathname === "/projects" ? tabStyle:{}}>
                <p><BsJournalCheck size={20}/></p>
            Projects</button>
            <button onClick={toProfile} style={url.pathname === "/profile" ? tabStyle:{}}>
                <p><BsFilePerson size={20}/></p>
            Profile</button>
            <div>
            <button onClick={logOut}>
                <p><BsBoxArrowLeft size={20}/></p>
            Sign out </button>
            </div>
            <img src={logo}/>
        </NavContainer>
    )
}

export default SideNav
