import { ProjectDetailsWrapper } from "./Project-details.styles"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import ProjectConsultants from "../Project-consultants/Project-consultants"


const ProjectDetails = (props) => {
    console.log(props.project)
    const initialID = useParams().projectId

    const [projects, setProjects] = useState()

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NzQ2ODg2LCJpYXQiOjE2NjczMTQ4ODYsImp0aSI6IjNhYzEwZjgzOGZmMTQ2YmY4NjJiZTFkZDIwYmIyZmVmIiwidXNlcl9pZCI6Mn0.5wUHo8VqAp8wEzR5tItvcOVYWZlXxaaMW7zajfpEn5A`,
        "content-type": "application/json",
    })    
    const getconfig = {
        method: get,
        headers: header
    }
    useEffect((state) => {
        fetch(`http://localhost:8000/api/projects/${initialID}`, getconfig)
          .then(response => response.json())
          .then(data => {setProjects(data)})
          .catch(error => console.log(error));

    },[])

    return (
        <ProjectDetailsWrapper>
            <div>
            <button>Edit</button>
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
            <div>
                <p>Skills needed</p>
                <p>props.project.name</p>
            </div>
            <div>
            <p>Consultants currently assigned to project:</p>
            <p></p>
            </div>
            <ProjectConsultants/>
            </div>
            
        </ProjectDetailsWrapper>
    )
}

export default ProjectDetails
