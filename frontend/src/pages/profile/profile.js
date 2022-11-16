
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import UserProfile from "../../components/User_Profile/profile-page";
import { ProfileContainer, SideNavStyle } from "./profile-styles";

const ProfilePage = () => {
    



    return (
        <ProfileContainer>
            <Header/>
            <sideNavStyle>
            <SideNav/>
            </sideNavStyle>
            <UserProfile/>
        </ProfileContainer>
    )
}

export default ProfilePage