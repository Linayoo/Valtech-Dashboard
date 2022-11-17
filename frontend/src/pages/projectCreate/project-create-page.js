import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import ProjectDetails from "../../components/Project-details/Project-details"
import { ProjectCreateContainer, SideNavContainer } from "./project-create-page.styles"
import CreateProject from "../../components/Project-create/Project-create"


const ProjectCreatePage = () => {
    return (
        <ProjectCreateContainer>
        <Header/>
        <SideNavContainer>
        <SideNav/>
        </SideNavContainer>
        <CreateProject/>
        </ProjectCreateContainer>
    )
}

export default ProjectCreatePage
