import React from "react";

const AddTag = (props) => {

    return (
        <div className="tagContainer">
           <button id={JSON.stringify(props.element)} onClick={props.add}>{props.element.display_name}</button>
        </div>
    )

}

export default AddTag;