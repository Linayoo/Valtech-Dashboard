import { EditButtonsContainer } from "./Edit.buttons.styles"

const EditButtons = (props) => {
    return (
        <EditButtonsContainer>
            <button>{props.test}</button> 
            <button>delete</button>
        </EditButtonsContainer>
    )
}

export default EditButtons
