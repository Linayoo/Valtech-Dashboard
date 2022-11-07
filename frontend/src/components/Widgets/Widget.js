import { WidgetWrap } from "./Widget.styles";
import { BsFillPersonFill } from "react-icons/bs";


const Widget = (props) => {
    return (
        <WidgetWrap>
            <p>{props.name}</p>
            <h1>{props.num}</h1>
            {/* <i><BsFillPersonFill size={30}/></i> */}
        </WidgetWrap>
    )
}

export default Widget