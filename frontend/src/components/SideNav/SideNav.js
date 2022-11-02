import { NavContainer } from "./SideNav.styles"
import { BsPersonPlus, BsClipboardData, BsJournalCheck, BsFilePerson } from "react-icons/bs";

const SideNav = () => {
    return (
        <NavContainer>
            <h1>Valtech_</h1>
            <button><p><BsPersonPlus size={20}/></p>Consultants</button>
            <button><p><BsClipboardData size={20}/></p>Insights</button>
            <button><p><BsJournalCheck size={20}/></p>Projects</button>
            <button><p><BsFilePerson size={20}/></p>Profile</button>
        </NavContainer>
    )
}

export default SideNav
