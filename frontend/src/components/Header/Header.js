import {BsSearch, BsBell, BsChevronDown} from "react-icons/bs";
import { HeaderContainer } from "./Header.styles";


const Header = () => {
    return (
        <HeaderContainer>
            <button ><BsBell size={22} color={"#5a5757"}/></button>
            <p>Good Morning, User <BsChevronDown/> </p>
            <img src="/images/patricia.png"/>
        </HeaderContainer>
    )
}

export default Header
