import {BsSearch, BsBell} from "react-icons/bs";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <BsSearch/>
            <BsBell/>
            <p>name</p>
            <img src="/images/patricia.png"/>
        </HeaderContainer>
    )
}

export default Header
