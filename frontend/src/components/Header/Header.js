import {BsSearch, BsBell} from "react-icons/bs";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <button ><BsBell size={22} color={"#5a5757"}/></button>
            <p>Name</p>
            <img src="/images/patricia.png"/>
        </HeaderContainer>
    )
}

export default Header
