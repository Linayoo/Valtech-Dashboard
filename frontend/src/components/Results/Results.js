import { ResultsContainer, OverFlow } from "./Results.styles"
import { BsChevronDown } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { CalendarContainer } from "react-datepicker";

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
                    <th> <button>Default view </button><BsChevronDown/></th>
                </tr>
                
            {props.consultants === undefined ? 'Loading...' : props.consultants.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.display_name}</td>
                        <td>{val.country}</td>
                        <td>{val.city}</td>
                        <td>populate db w/ managers</td>
                        <td>{val.unavailable.map(e => `${e.date_finished}`)}</td>
                        <td>{(val.unavailable[0] == undefined || new Date() > new Date(`${val.unavailable[0].date_finished}Z`)) ? 'Available' : 'On project'}</td>
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

/* {new Date() > val.unavailable.map(e => new Date(`${e.date_finished}Z`)) ? 'On Project' : 'Unavailable' } */