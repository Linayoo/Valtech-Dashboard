import React from "react";
import styled from "styled-components"
import img from "./assets/delete-white.png"

const Consultant = styled.div`

margin-bottom: 30px;
margin-top: 10px;

.tagContainer {
    display: flex;
    flex-direction: row;
}

.leftHalf {
    background: rgb(55, 3, 114);
    width: 18px;
    height: 35px;
    border-radius: 18px 0px 0px 18px;
}

.tagText {
    color: white;
    font-size: 14px;
    background: rgb(55, 3, 114);
    padding: 9px 0px 9px 0px;
    height: 35px;
    align-items: center;
}

.rightHalf {
    background: rgb(55, 3, 114);
    width: 30px;
    height: 35px;
    border-radius: 0px 18px 18px 0px;
    border: none;
    background-image: url(${img});
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
    cursor: pointer;
    margin-top: 0px;
}
`;

const Tags = (props) => {

    return (
        <Consultant>
            <div className="tagContainer">
                <div className="leftHalf"></div>
                <div className="tagText">{props.consultant.display_name}</div>
                <button className="rightHalf" id={props.id} name={JSON.stringify(props.consultant)} onClick={props.remove}></button>
            </div>
        </Consultant>
    )

}

export default Tags;