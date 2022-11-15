import { ProjectConsultantsContainer, OverFlow } from "./Project-consultants.styles"
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState } from "react";

const ProjectConsultants = (props) => {

const navigate = useNavigate();
const [test, setTest] = useState();

const goToUser = (id) => {
    navigate(`/consultant/${id}/`)
}

    return (
        <ProjectConsultantsContainer>
            <OverFlow>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Manager</th>
                    <th>Status</th>
                    {/*<th> <button>Default view </button><BsChevronDown/></th>*/}
                </tr>
            {props.consultant === undefined ? 'Not provided' : props.consultant.assignee.map((val, key) => {
                return (
                    // onclick needs to bring you to the clicked consultant details
                    <tr key={key}>
                        <td onClick={() => goToUser(val.id)}>{val.display_name}</td>
                        <td onClick={() => goToUser(val.id)}>{val.country}</td>
                        <td onClick={() => goToUser(val.id)}>{val.city}</td>
                        <td onClick={() => goToUser(val.id)}>{val.manager_display_name}</td>
                        <td onClick={() => goToUser(val.id)}>{(val.unavailable[0] == undefined || new Date() > new Date(`${val.unavailable[0].date_finished}Z`)) ? 'Available' : 'On project'}</td>
                    </tr>
                   
                )
            })}
            </table>
            </OverFlow>
        </ProjectConsultantsContainer>
    )
}

export default ProjectConsultants
