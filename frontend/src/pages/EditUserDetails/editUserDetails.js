import EditUserProfile from "../../components/editProfile/editProfile";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import { ProfileContainer, sideNavStyle } from "./editUserDetails-style";

const EditUserDetails = () => {
    



    return (
        <ProfileContainer>
            <Header/>
            <sideNavStyle>
            <SideNav/>
            </sideNavStyle>
            <EditUserProfile/>
        </ProfileContainer>
    )
}

export default EditUserDetails