import { ProfileInfo, ProfileAll, ProfileJoined, ButtonProfile, EditUserDetails, ProfileUsername, ProfileEmail, ProfileName, ProfileMain,ProfileRightSide, NameLocation, ProfilePhoto, ProfileInfoLeftSide} from "./editprofile-style"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



const EditUserProfile = () => {

    const [consultants, setConsultants] = useState([])

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
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
                        <img src={consultants.image} alt="photo"></img>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p>First Name: <input type="text" placeholder={consultants.first_name}></input></p>
                            <p>Last name: <input type="text" placeholder={consultants.last_name}></input></p>
                        </ProfileName>
                    </NameLocation>
                    <ProfileUsername>
                            <p>Userame: <input type="text" placeholder={consultants.username}></input></p>
                    </ProfileUsername>
                    <ProfileEmail>
                        <p>Email: <input type="text" placeholder={consultants.email}></input></p>
                    </ProfileEmail>
                    <ProfileJoined>
                        <p>Joined: <input type="text" placeholder={consultants.date_joined}></input></p>
                    </ProfileJoined>
                </ProfileRightSide>
            </ProfileInfo>
            <ButtonProfile>
                <EditUserDetails>       
                  <p>Save</p>
                </EditUserDetails>
            </ButtonProfile>
        </ProfileMain>
)}

export default EditUserProfile

                