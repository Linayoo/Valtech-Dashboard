import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import ProjectDetails from "../../components/Project-details/Project-details"
import { ProjectCreateContainer } from "./project-create-page.styles"


const ProjectCreatePage = () => {
    return (
        <ProjectCreateContainer>
        <Header/>
        <SideNav/>
        </ProjectCreateContainer>
    )
}

export default ProjectCreatePage
