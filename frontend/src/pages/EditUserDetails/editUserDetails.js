import EditUserProfile from "../../components/editProfile/editProfile";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import { ProfileContainer } from "./editUserDetails-style";

const EditUserDetails = () => {
    



    return (
        <ProfileContainer>
            <Header/>
            <SideNav/>
            <EditUserProfile/>
        </ProfileContainer>
    )
}

export default EditUserDetails