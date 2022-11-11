import { ResultsContainer, OverFlow } from "./Results.styles"
import { BsChevronDown } from "react-icons/bs";
import React from "react";


const Results = (props) => {

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
                                <td>{val.display_name}</td>
                                <td>{val.country}</td>
                                <td>{val.city}</td>
                                {/* <td><img src={val.image_path}/></td> */}
                                <td>{/*{val.manager_display_name}*/}</td>
                                <td>{val.unavailable.map(e => `${e.date_finished}`)}</td>
                                <td>{(val.unavailable[0] == undefined || new Date() > new Date(`${val.unavailable[0].date_finished}Z`)) ? 'Available' : 'On project'}</td>
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