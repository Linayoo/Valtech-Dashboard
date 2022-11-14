import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ProjectEditContainer } from "../projectEdit/project-edit-page.styles"
import EditProjects from "../../components/Project-edit/Project-edit"


const ProjectEditPage = () => {
    return (
        <ProjectEditContainer>
        <Header/>
        <SideNav/>
        <EditProjects/>
        </ProjectEditContainer>
    )
}

export default ProjectEditPage
