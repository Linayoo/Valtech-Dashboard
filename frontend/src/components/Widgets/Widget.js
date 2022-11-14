import { WidgetWrap } from "./Widget.styles";
import { BsFillPersonFill } from "react-icons/bs";


const Widget = (props) => {
    return (
        <WidgetWrap>
            <p>{props.name}</p>
            <h1>{props.num}</h1>
            <i>{props.icon}</i> 
        </WidgetWrap>
    )
}

export default Widget