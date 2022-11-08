import { ProjectConsultantsContainer, OverFlow } from "./Project-consultants.styles"
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router";

const ProjectConsultants = () => {

const navigate = useNavigate();

const data = [
    { name: "Eugene Samarin", country: "switzerland", project: "Frontend developer", manager: "Ruben Villalon", available: "12-11-2022", status: "available" /*true?*/ },
    { name: "Miri Yoo", country: "germany", project: "Backend developer", manager: "Ruben Villalon", available: "12-08-2022", status: "available" /*true?*/ },
    { name: "Laura van Os", country: "switzerland", project: "Frontend developer", manager: "Ruben Villalon", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Levente Pap", country: "switzerland", project: "Fullstack developer", manager: "Ruben Villalon", available: "05-01-2022", status: "unavailable" /*true?*/ },
   
  ]

  

    return (
        <ProjectConsultantsContainer>
            <OverFlow>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Country</th>
                    <th>Manager</th>
                    <th>Started project</th>
                    <th> <button>Default view </button><BsChevronDown/></th>
                </tr>
            {data.map((val, key) => {
                return (
                    // onclick needs to bring you to the clicked consultant details
                    <tr key={key} onClick={() => navigate('/home')}>
                        <td>{val.name}</td>
                        <td>{val.project}</td>
                        <td>{val.country}</td>
                        <td>{val.manager}</td>
                        <td>{val.available}</td>
                        <td>
                            <div>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </td>
                    </tr>
                   
                )
            })}
            </table>
            </OverFlow>
        </ProjectConsultantsContainer>
    )
}

export default ProjectConsultants
