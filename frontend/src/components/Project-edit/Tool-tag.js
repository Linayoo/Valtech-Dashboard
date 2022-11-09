import React from "react";

const ToolTag = (props) => {

    return (
        <div className="tagContainer">
            <div className="leftHalf"></div>
            <div className="tagText">{props.tool.title}</div>
            <button className="rightHalf" id={props.id} onClick={props.remove}></button>
        </div>
    )

}

export default ToolTag;