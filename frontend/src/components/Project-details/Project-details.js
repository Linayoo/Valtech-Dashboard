import { ProjectDetailsWrapper } from "./Project-details.styles"


const ProjectDetails = (props) => {
    console.log(props.project)
    return (
        <ProjectDetailsWrapper>
            <div>
            <h1>Project details</h1>
            <hr></hr>
            <div>
                <p>Project name</p>
                <p>props.project.name</p>
            </div>
            <div>
                <p>Client </p>
                <p>props.project.name</p>
            </div>
            <div>
                <p>Country</p>
                <p>props.project.name</p>
            </div>
            <div>
                <p>Project duration</p>
                <p>props.project.name</p>
            </div>
            <div>
                <p>Status</p>
                <p>props.project.name</p>
            </div>
            <div>
                <p>Amount of consultants <br/> working on project</p>
                <p>props.project.name</p>
            </div>
            </div>
        </ProjectDetailsWrapper>
    )
}

export default ProjectDetails
