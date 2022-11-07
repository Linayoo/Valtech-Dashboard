import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import ProjectDetails from "../../components/Project-details/Project-details"
import { ProjectDetailsContainer } from "./project-details-page.styles"


const ProjectDetailsPage = () => {
    return (
        <ProjectDetailsContainer>
        <Header/>
        <SideNav/>
       <ProjectDetails/>
        </ProjectDetailsContainer>
    )
}

export default ProjectDetailsPage
