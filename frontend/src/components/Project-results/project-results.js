import { ProjectResultsContainer, OverFlow } from "./project-results.styles"
import { BsChevronDown, BsPencilSquare } from "react-icons/bs";
import { useEffect, useState } from "react";
import EditButtons from "../Edit-buttons/Edit-buttons";
import ProjectDetails from "../Project-details/Project-details";
import { useNavigate } from "react-router";

const ProjectResults = (props) => {

    const navigate = useNavigate();
    const [rendernumber, setRendernumber] = useState()
    const [editButton, renderEditButton] = useState(false)
    const [projectInfo, setProjectInfo] = useState()

    const navigateToProjectDetails = (event, val) => {
        setProjectInfo(val)
        navigate(`/project/${val.project}`);
    };

    const changeRender = (event) => {
        renderEditButton(!editButton)
        setRendernumber(event.target.id)
    }

    { projectInfo && <ProjectDetails project={projectInfo} /> }

    return (
        <ProjectResultsContainer>
            <OverFlow>
                <p>{props.projects === undefined ? 'Loading...' : props.projects.length} matching projects</p>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>External Link</th>
                        <th>End Date</th>
                        <th>On project</th>
                        <th>Status</th>
                    </tr>

                    {props.projects === undefined ? 'Loading...' : props.projects.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td onClick={(event) => navigateToProjectDetails(event, val)}>{val.name}</td>
                                <td onClick={(event) => navigateToProjectDetails(event, val)}>{val.external_link === "" ? 'Not specified' : val.external_link}</td>
                                <td onClick={(event) => navigateToProjectDetails(event, val)}>{val.time_frame === null ? 'Not specified' : val.time_frame.date_finished}</td>
                                <td onClick={(event) => navigateToProjectDetails(event, val)}>{val.assignee.length} person(s)</td>
                                <td onClick={(event) => navigateToProjectDetails(event, val)}>{val.time_frame === null || new Date() < new Date(`${val.time_frame.date_finished}Z`) ? 'Ongoing' : 'Finished'}</td>
                                <td>
                                    <div>
                                        <button onClick={changeRender} id={key}></button>
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </td>
                                <>{key == rendernumber && editButton == true ? <EditButtons /> : ''}</>
                            </tr>
                        )
                    })}
                </table>
            </OverFlow>
        </ProjectResultsContainer>
    )
}

export default ProjectResults
