
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import UserProfile from "../../components/User_Profile/profile-page";
import { ProfileContainer } from "./profile-styles";

const ProfilePage = () => {
    
    // const [tomapout, setTomapout] = useState()

    return (
        <ProfileContainer>
            <Header/>
            <SideNav/>
            <UserProfile/>
        </ProfileContainer>
    )
}

export default ProfilePage