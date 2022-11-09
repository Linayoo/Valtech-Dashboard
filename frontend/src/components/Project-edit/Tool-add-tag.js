import React from "react";

const ToolAddTag = (props) => {

    return (
        <div className="tagContainer">
           <button id={JSON.stringify(props.element)} onClick={props.add}>{props.element.title}</button>
        </div>
    )

}

export default ToolAddTag;