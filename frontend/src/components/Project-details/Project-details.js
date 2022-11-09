import { ProjectDetailsWrapper, HeaderStyle, ConsultantStyle } from "./Project-details.styles"
import { useParams } from "react-router"
import { useEffect, useState} from "react"
import ProjectConsultants from "../Project-consultants/Project-consultants"
import { useNavigate } from "react-router"


const ProjectDetails = (props) => {
    
    const navigate = useNavigate()
    const initialID = useParams().projectId

    const [projects, setProjects] = useState()

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
        "content-type": "application/json",
    })    
    const getconfig = {
        method: get,
        headers: header
    }
    useEffect((state) => {
        fetch(`http://localhost:8000/api/projects/${initialID}/`, getconfig)
          .then(response => response.json())
          .then(data =>  {setProjects(data)})
          .catch(error => console.log(error));

    },[])

    return (
        <ProjectDetailsWrapper>
            <div>
            <HeaderStyle>
            <h1>Project details</h1>
            <button onClick={() => navigate('/edit')}>Edit details</button>
            </HeaderStyle>
            <hr></hr>
            <div>
                <p>Image</p>
                {/* <img src={projects.image}/> */}
            </div>
            <div>
                <p>Name</p>
                <p>{projects?.name}</p>
            </div>
            <div>
                <p>Description </p>
                <p>{projects?.description}</p>
            </div>
            <div>
                <p>External link</p>
                <p>{projects?.external_link}</p>
            </div>
            <div>
                <p>Project duration</p>
                <p>{projects?.time_frame}</p>
            </div>
            <div>
                <p>Amount of consultants <br/> working on project</p>
                <p>{projects?.assignee}</p>
            </div>
            <div>
                <p>Skills needed</p>
                <p>{projects?.tools}</p>
            </div>
            <ConsultantStyle>
            <p>Consultants currently assigned to project:</p>
            <ProjectConsultants/>
            </ConsultantStyle>
            </div>
            
        </ProjectDetailsWrapper>
    )
}

export default ProjectDetails
