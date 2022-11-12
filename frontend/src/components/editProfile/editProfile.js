import { ProfileInfo, ProfileJoined, ButtonProfile, EditUserDetails, ProfileUsername, ProfileEmail, ProfileName, ProfileMain,ProfileRightSide, NameLocation, ProfilePhoto, ProfileInfoLeftSide} from "./editprofile-style"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



const EditUserProfile = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const [consultants, setConsultants] = useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            date_joined: "",
            
        }
    )

    const get = "GET"
    const patch = "PATCH";
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })

    const body = JSON.stringify({
        "username": consultants.username,
        "first_name": consultants.first_name,
        "last_name": consultants.last_name,
        "email": consultants.email,
        "date_joined": consultants.date_joined,
    })

    const getconfig = {
    method: get,
    headers: header,
    }

    const patchconfig = {
        method: patch,
        headers: header,
        body: body
    }

useEffect((state) => {
    fetch("http://localhost:8000/api/me/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));
}, [])


const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/me/`, patchconfig)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


const handleChange = (event) => {
    setConsultants(prevConsultants => {
        return {
            ...prevConsultants,
            [event.target.first_name]: event.target.value
        }
    })
}


return (
     
        <ProfileMain>
            <ProfileInfo onSubmit={handleSubmit}>
                <ProfileInfoLeftSide>
                    <ProfilePhoto>
                        <img src={consultants.image} alt="photo"></img>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p>First name: <input type="text" value={consultants.first_name} name="first_name" onChange={handleChange}></input></p>
                            <p>Last name: <input type="text" placeholder={consultants.last_name} name="last_name" onChange={handleChange}></input></p>
                        </ProfileName>
                    </NameLocation>
                    <ProfileUsername>
                            <p>Username: <input type="text" placeholder={consultants.username} name="username" onChange={handleChange}></input></p>
                    </ProfileUsername>
                    <ProfileEmail>
                        <p>Email: <input type="text" placeholder={consultants.email} name="email" onChange={handleChange}></input></p>
                    </ProfileEmail>
                    <ProfileJoined>
                        <p>Joined: <input type="text" placeholder={consultants.date_joined} name="date_joined" onChange={handleChange}></input></p>
                    </ProfileJoined>
                </ProfileRightSide>
            </ProfileInfo>
            <ButtonProfile>
                <EditUserDetails>       
                  <p type="submit">Save</p>
                </EditUserDetails>
            </ButtonProfile>
        </ProfileMain>
)}

export default EditUserProfile

                