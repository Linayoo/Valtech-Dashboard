
import ProjectFilter from "../../components/Project-filter/project-filter"
import ProjectResults from "../../components/Project-results/project-results"
import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ProjectsContainer } from "./projects.style"
import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
    
    const [tomapout, setTomapout] = useState()
    
    return (
        <ProjectsContainer>
        <Header/>
        <SideNav/>
        <div>
       <ProjectFilter setTomapout={setTomapout}/>
       <ProjectResults projects={tomapout}/>
        </div>
        </ProjectsContainer>
    )
}


export default ProjectsPage
