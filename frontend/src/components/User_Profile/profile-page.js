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
    fetch("https://valtech-dashboard.propulsion-learn.ch/backend/api/me/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));
}, [])





return (
        <ProfileMain>
                    <h1>My profile details</h1>
                    <hr/>
                    <>{console.log(consultants.image)}</>
                      <img src={consultants.image} alt="error"></img>
                        <div>
                            <p>First name:</p>
                            <p>{consultants.first_name}</p>
                        </div>
                        <div>
                            <p>Last name:</p>
                            <p>{consultants.last_name}</p>
                        </div>
                        <div>
                            <p>Username:</p>
                            <p>{consultants.username}</p>
                        </div>
                        <div>
                            <p>Email: </p>
                            <p>{consultants.email}</p>
                        </div>
                        <div>
                            <p>Joined:</p>
                            <p>{consultants.date_joined}</p>
                        </div>
                        <button onClick={() => navigate(`/profile/edit`)}>Edit Details</button>
        </ProfileMain>
    )
}

export default UserProfile

                

