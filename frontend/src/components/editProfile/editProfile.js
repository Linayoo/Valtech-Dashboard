import { ProfileInfo, ProfileJoined, FieldsProfile, ChangePhotoButton, ButtonProfile, EditUserDetails, ProfileUsername, ProfileEmail, ProfileName, ProfileMain, ProfileRightSide, NameLocation, ProfilePhoto, ProfileInfoLeftSide } from "./editprofile-style"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



const EditUserProfile = () => {
    const navigate = useNavigate()
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
    const fileUploadHeaders = new Headers({
        "Authorization": `Bearer ${localToken}`,
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
        fetch("https://valtech-dashboard.propulsion-learn.ch/backend/api/me/", getconfig)
            .then(response => response.json())
            .then(data => setConsultants(data))
            .catch(error => console.log(error));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/me/`, patchconfig)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleImgUpload = (e) => {
        e.preventDefault()
        const imageData = new FormData()
        imageData.append("image", e.target.files[0])
        (fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/me/`, {
                method: patch,
                headers: fileUploadHeaders,
                body: imageData
              }))
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    
    const handleChange = (event) => {
        setConsultants(prevConsultants => {
            return {
                ...prevConsultants,
                [event.target.name]: event.target.value
            }
        })
    }

    return (

        <ProfileMain form='user' onSubmit={handleSubmit}>
            <h1>Edit my profile</h1>
            <hr/>
                            <img src={consultants.image} alt="photo"></img>

                            <p>First name: <input type="text" value={consultants.first_name} name="first_name" onChange={handleChange}></input></p>

                            <p>Last name: <input type="text" value={consultants.last_name} name="last_name" onChange={handleChange}></input></p>
                        
                            <p>Username: <input type="text" value={consultants.username} name="username" onChange={handleChange}></input></p>
                     
                            <p>Email: <input type="text" value={consultants.email} name="email" onChange={handleChange}></input></p>
                    
                            <p>Joined: <input type="text" value={consultants.date_joined} name="date_joined" onChange={handleChange}></input></p>
                            <p>Image Upload</p>
                        <label for="save">   
                        <input id="save" multiple type="file" name="image/" onChange={handleImgUpload} />
                        </label> 
                      
                        <button onClick={() => navigate(`/profile/`)}type='submit'>SAVE</button>
                 
        </ProfileMain>
    )
}

export default EditUserProfile

