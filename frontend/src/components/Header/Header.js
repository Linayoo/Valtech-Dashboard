import {BsSearch, BsBell, BsChevronDown} from "react-icons/bs";
import { HeaderContainer } from "./Header.styles";


const Header = () => {
    return (
        <HeaderContainer>
            <img src="/images/patricia.png"/>
            <p>Jane Doe </p>
            <BsChevronDown size={22} color={"#1b253d"} />
            <button ><BsBell size={22} color={"#5a5757"}/></button>
        </HeaderContainer>
    )
}

export default Header
