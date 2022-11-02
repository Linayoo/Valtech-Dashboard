
import ProjectFilter from "../../components/Project-filter/project-filter"
import ProjectResults from "../../components/Project-results/project-results"
import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ProjectsContainer } from "./projects.style"

const ProjectsPage = () => {
    return (
        <ProjectsContainer>
        <Header/>
        <SideNav/>
        <div>
       <ProjectFilter/>
       <ProjectResults/>
        </div>
        </ProjectsContainer>
    )
}


export default ProjectsPage
