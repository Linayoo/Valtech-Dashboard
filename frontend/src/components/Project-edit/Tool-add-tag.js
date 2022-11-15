import React from "react";
import styled from "styled-components"

const Tool = styled.div`

/* button {
    font-size: 14px;
    padding: 9px 15px 9px 15px;
    height: 35px;
    border-radius: 18px;
    margin-right: 5px;
    background-color: black;
    color: white;
} */

 button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    padding: 9px 15px 9px 15px;
    height: auto;
    font-weight: bolder;
    border-radius: 18px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

button:hover {
    background-color: #220641;
    color: white;
}

`;

const ToolAddTag = (props) => {

    return (
        <Tool>
           <button id={JSON.stringify(props.element)} onClick={props.add}>{props.element.title}</button>
        </Tool>
    )

}

export default ToolAddTag;