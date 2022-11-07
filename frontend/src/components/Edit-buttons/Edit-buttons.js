import { EditButtonsContainer } from "./Edit.buttons.styles"
import { BsChevronDown, BsPencilSquare, BsXSquare, BsTrash } from "react-icons/bs";

const EditButtons = () => {
    return (
        <EditButtonsContainer>
            <button><BsXSquare size={17}/></button>
            <div>
            <BsPencilSquare/>
            <button>edit</button> 
            </div>
            <div>
            <BsTrash/>
            <button>delete</button>
            </div>
        </EditButtonsContainer>
    )
}

export default EditButtons
