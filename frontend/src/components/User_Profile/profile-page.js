import { ProfileInfo, FieldsProfile, ChangePhotoButton, ProfileJoined, ButtonProfile, EditUserDetails, ProfileUsername, ProfileEmail, ProfileName, ProfileMain,ProfileRightSide, NameLocation, ProfilePhoto, ProfileInfoLeftSide} from "./profile.styles"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import SideNav from '../../components/SideNav/SideNav';


const UserProfile = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()

    const [consultants, setConsultants] = useState([])

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })

    const getconfig = {
    method: get,
    headers: header,
    }

useEffect((state) => {
    fetch("http://localhost:8000/api/me/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));
}, [])





return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <ProfilePhoto>
                    <img src={consultants.image} alt="error"></img>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <FieldsProfile>
                    <NameLocation>
                        <ProfileName>
                            <p>First name: <span>{consultants.first_name}</span></p>
                            <p>Last name: <span>{consultants.last_name}</span></p>
                        </ProfileName>
                    </NameLocation>
                    <ProfileUsername>
                        <p>Username: <span>{consultants.username}</span></p>
                    </ProfileUsername>
                    <ProfileEmail>
                        <p>Email: <span>{consultants.email}</span></p>
                    </ProfileEmail>
                    <ProfileJoined>
                        <p>Joined: <span>{consultants.date_joined}</span></p>
                    </ProfileJoined>
                    </FieldsProfile>
                    <ChangePhotoButton>
                        <button>Upload Photo</button>
                    </ChangePhotoButton>
                </ProfileRightSide>
                
            </ProfileInfo>
            <ButtonProfile>
                <EditUserDetails>       
                  <p onClick={() => navigate(`/profile/edit`)}>Edit User Details</p>
                </EditUserDetails>
            </ButtonProfile>
        </ProfileMain>
    )
}

export default UserProfile

                

