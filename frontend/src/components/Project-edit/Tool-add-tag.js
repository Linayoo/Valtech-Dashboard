import React from "react";
import styled from "styled-components"

const Tool = styled.div`

button {
    font-size: 14px;
    padding: 9px 15px 9px 15px;
    height: 35px;
    border-radius: 18px;
    margin-right: 5px;
    background-color: black;
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