import { ResultsContainer, OverFlow } from "./Results.styles"
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router";


const Results = (props) => {
    const navigate = useNavigate()
    const navigateToConsultantDetails = (event, val) => {
        navigate(`/consultant/${val.id}`);
    };

    return (
        <ResultsContainer>
            <OverFlow>
                <p>{props.consultants === undefined ? 'Loading...' : props.consultants.length} matching consultants</p>
                <table>
                    <tr>
                        <th>Name/Title</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Manager</th>
                        <th>Available as of</th>
                        <th>Status</th>
                        <th> <button>Default view </button><BsChevronDown /></th>
                    </tr>
                    {props.consultants === undefined ? 'Loading...' : props.consultants.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td onClick={(event) => navigateToConsultantDetails(event, val)}>{val.display_name}</td>
                                <td onClick={(event) => navigateToConsultantDetails(event, val)} >{val.country}</td>
                                <td onClick={(event) => navigateToConsultantDetails(event, val)}>{val.city}</td>
                                {/* <td><img src={val.image_path}/></td> */}
                                <td onClick={(event) => navigateToConsultantDetails(event, val)}>{/*{val.manager_display_name}*/}</td>
                                <td onClick={(event) => navigateToConsultantDetails(event, val)}>{val.unavailable.map(e => `${e.date_finished}`)}</td>
                                <td onClick={(event) => navigateToConsultantDetails(event, val)}>{(val.unavailable[0] == undefined || new Date() > new Date(`${val.unavailable[0].date_finished}Z`)) ? 'Available' : 'On project'}</td>
                                <td><div>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div></td>
                            </tr>
                        )
                    })}
                </table>
            </OverFlow>
        </ResultsContainer>
    )
}

export default Results