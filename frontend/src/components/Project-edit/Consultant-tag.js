import React from "react";

const Tags = (props) => {

    return (
        <div className="tagContainer">
            <div className="leftHalf"></div>
            <div className="tagText">{props.consultant.display_name}</div>
            <button className="rightHalf" id={props.id} onClick={props.remove}></button>
        </div>
    )

}

export default Tags;