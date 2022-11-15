import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ProjectEditContainer, HeaderStyle, SideNavStyle } from "../projectEdit/project-edit-page.styles"
import EditProjects from "../../components/Project-edit/Project-edit"


const ProjectEditPage = () => {
    return (
        <ProjectEditContainer>
            <HeaderStyle>
                <Header/>
            </HeaderStyle>
            <SideNavStyle>
                 <SideNav/>
            </SideNavStyle>
        <EditProjects/>
        </ProjectEditContainer>
    )
}

export default ProjectEditPage
