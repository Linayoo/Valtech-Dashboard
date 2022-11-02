import { ResultsContainer, OverFlow } from "./Results.styles"
import { BsChevronDown } from "react-icons/bs";

// fetching example data

const data = [
    { name: "Florin Senoner", country: "switzerland", project: "levi's", manager: "Ruben Villalon", available: "12-11-2022", status: "available" /*true?*/ },
    { name: "Anon1", country: "germany", project: "loreal", manager: "test1", available: "12-08-2022", status: "available" /*true?*/ },
    { name: "Anon2", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon3", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon4", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon2", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon2", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon2", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon5", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
    { name: "Anon5", country: "switzerland", project: "SIT", manager: "test2", available: "05-01-2022", status: "unavailable" /*true?*/ },
  ]



const Results = () => {
    return (
        <ResultsContainer>
          <OverFlow>
            <p>{data.length} matching consultants</p>
            
            <table>
                <tr>
                    <th>Name/Title</th>
                    <th>Country</th>
                    <th>Current Project</th>
                    <th>Manager</th>
                    <th>Available as of</th>
                    <th>Status</th>
                    <th> <button>Default view </button><BsChevronDown/></th>
                </tr>
                
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.country}</td>
                        <td>{val.project}</td>
                        <td>{val.manager}</td>
                        <td>{val.available}</td>
                        <td>{val.status} </td>
                        <td><button>edit</button><button>delete</button></td>
                    </tr>
                )
            })}
            </table>
            </OverFlow>
        </ResultsContainer>
       
    )
}

export default Results
