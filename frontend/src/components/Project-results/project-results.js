import { ProjectResultsContainer, OverFlow } from "./project-results.styles"
import { BsChevronDown, BsPencilSquare } from "react-icons/bs";
import { useEffect, useState } from "react";
import EditButtons from "../Edit-buttons/Edit-buttons";

// fetching example data

const ProjectResults = () => {

    const data = [
        { name: "Levi's", country: "switzerland", project: "1",  available: "12-11-2022", status: "open" /*true?*/ },
        { name: "Rolex", country: "switzerland", project: "2",  available: "12-11-2022", status: "demo" /*true?*/ },
        { name: "Valtech", country: "switzerland", project: "3",  available: "12-11-2022", status: "open" /*true?*/ },
        { name: "SIT", country: "switzerland", project: "4",  available: "12-11-2022", status: "closed" /*true?*/ },
        { name: "Levi's", country: "switzerland", project: "5",  available: "12-11-2022", status: "open" /*true?*/ },
        { name: "Rolex", country: "switzerland", project: "6",  available: "12-11-2022", status: "demo" /*true?*/ },
        { name: "Valtech", country: "switzerland", project: "7",  available: "12-11-2022", status: "open" /*true?*/ },
        { name: "SIT", country: "switzerland", project: "8",  available: "12-11-2022", status: "closed" /*true?*/ },
      
      ]
    
    const [rendernumber, setRendernumber] = useState() 
    const [editButton, renderEditButton] = useState(false)

    const changeRender = (event) => {
        renderEditButton(!editButton)
        setRendernumber(event.target.id)
    }

    return (
        <ProjectResultsContainer>
          <OverFlow>
            <p>{data.length} matching projects</p>
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>Client</th>
                    <th>Country</th>
                    <th>working on project</th>
                    <th>Startdate</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
                
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>Name</td>
                        <td>{val.name}</td>
                        <td>{val.country}</td>
                        <td>{val.project}</td>
                        <td>{val.available}</td>
                        <td>{val.status} </td>
                        <td><button>details</button></td>
                        <td>
                            <button onClick={changeRender} id={key}>Button</button>
                        </td>
                        <td>{key == rendernumber && editButton == true ? <EditButtons test={rendernumber}/> : ''}</td>
                    </tr>
                )
            })}
            </table>
            </OverFlow>
        </ProjectResultsContainer>
    )
}

export default ProjectResults
