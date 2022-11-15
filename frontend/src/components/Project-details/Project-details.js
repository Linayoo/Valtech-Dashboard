import { ProjectDetailsWrapper, HeaderStyle, ConsultantStyle } from "./Project-details.styles"
import { useParams } from "react-router"
import { useEffect, useState} from "react"
import ProjectConsultants from "../Project-consultants/Project-consultants"
import { useNavigate } from "react-router"


const ProjectDetails = () => {
    
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()
    const initialID = useParams().projectId

    const [project, setProject] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [link, setLink] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [assignee, setAssignee] = useState()
    const [tools, setTools] = useState()

    const get = "GET"
    const deleteMethod = "DELETE"

    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })    
    const getconfig = {
        method: get,
        headers: header
    }
    const deleteConfig = {
        method: deleteMethod,
        headers: header
    }

    const handleDelete = () => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/${initialID}/`, deleteConfig)
          .then(response => {
              response.json();
              navigate(`../../projects/`);
            })
          .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/${initialID}/`, getconfig)
          .then(response => response.json())
          .then(data => {
            setProject(data) 
            setName(data.name);
            setDescription(data.description);
            setLink(data.external_link);
            setStart(data.time_frame.date_started);
            setEnd(data.time_frame.date_finished);
            setAssignee(data.assignee);
            setTools(data.tools);
          })
          .catch(error => console.log(error));

    },[])

    return (
        <ProjectDetailsWrapper background={`http://localhost:8000${project?.image}`}>
            <div>
            <HeaderStyle>
            <h1>Project details</h1>
            <button onClick={() => navigate(`/project/${initialID}/edit`)}>Edit details</button>
            <button className="deleteButton" onClick={handleDelete}>Delete project</button>
            </HeaderStyle>
            <hr></hr>
            <div>
                <p className="hero"></p>
            </div>
            <div>
                <p>Name</p>
                <p>{name === undefined ? 'Not provided' : name}</p>
            </div>
            <div>
                <p>Description </p>
                <p>{description === (null || "") ? 'Not provided' : description}</p>
            </div>
            <div>
                <p>External link</p>
                <p>{link ===  (null || "") ? 'Not provided' : link}</p>
            </div>
            <div>
                <p>Project duration</p>
                <p>{start === (undefined || null) ? 'Not provided' : start} - {end === (undefined || null) ? 'Not provided' : end}</p>
                
            </div>
            <div>
                <p>Consultants working on project</p>
                <p>{assignee === undefined ? '0' : assignee.length}</p>
            </div>
            <div>
                <p>Tools used</p>
                {tools === undefined ? '' : tools.map(element => <h4>{element.title}</h4>)}
            </div>
            <ConsultantStyle>
            <p className="consultant-currently">Consultants currently assigned to project:</p>
            <ProjectConsultants consultant={project}/>
            </ConsultantStyle>
            </div>
            
        </ProjectDetailsWrapper>
    )
}

export default ProjectDetails
