import { CreateConsultantContainer, } from "./Consultant-create.styles";
import React, { useState } from "react";

const CreateConsultant = () => {
    const [displayName, setDisplayName] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [title, setTitle] = useState("")
    const [username, setUsername] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [officeCat, setOfficeCat] = useState("")
    const [email, setEmail] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [summary, setSummary] = useState("")
    const [prmLang, setPrmLang] = useState("")
    const [manager, setManager] = useState("")
    const [role, setRole] = useState("")
    const [langSkill, setLangSkill] = useState("")
    const [skill, setSkill] = useState("")
    const [addSkill, setAddSkill] = useState("")
    const [certificate, setCertificate] = useState("")
    const [unavailable, setUnavailable] = useState("")
    const [education, setEducation] = useState("")
    const [image, setImage] = useState("")

    const handleUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setImage(imageUrl[0]);
    }

    const post = "POST"
    const patch = "PATCH"

    const headers = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MjQ5MzMwLCJpYXQiOjE2Njc4MTczMzAsImp0aSI6ImFiMDk5Yzg3MjRkMTRmY2NiYThmZGQ1Y2JkZjU5OWQ2IiwidXNlcl9pZCI6MX0.2E0ZLI8aE0DWzogP_ORPWWFLfTIE44p57eDzQX5WYZc`,
        'content-type': 'application/json'
    })

    const fileUploadHeaders = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MjQ5MzMwLCJpYXQiOjE2Njc4MTczMzAsImp0aSI6ImFiMDk5Yzg3MjRkMTRmY2NiYThmZGQ1Y2JkZjU5OWQ2IiwidXNlcl9pZCI6MX0.2E0ZLI8aE0DWzogP_ORPWWFLfTIE44p57eDzQX5WYZc`,
        // "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    })

    const parseStringToList = (inputString) => { return inputString.split(",").map(Number)} 

    const consultant = JSON.stringify({
        "display_name": `${displayName}`,
        "first_name": `${firstname}`,
        "last_name": `${lastname}`,
        "title": `${title}`,
        "country": `${country}`,
        "city": `${city}`,
        "office_category": `${officeCat}`,
        "email": `${email}`,
        "linked_in_link": `${linkedIn}`,
        "primary_language": `${prmLang}`,
        "language_skills": parseStringToList(langSkill),
        "managed_skills": parseStringToList(skill),
        "addition_skills": parseStringToList(addSkill),
        "manager_display_name": `${manager}`,
        "role_category": `${role}`,

    })

    const config = {
        method: post,
        headers: headers,
        body: consultant,
    }

    const imageData = new FormData()
    imageData.append("image_path", image)

    const imageUploadConfig = {
        method: patch,
        headers: fileUploadHeaders,
        body: imageData
    }

    const createConsultant = (event) => {
        event.preventDefault();
        console.log(config.body)
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/new/`, config)
        .then(response => response.json())
        .then((data) => fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${data.id}/`, imageUploadConfig))
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch(error => console.log(error));
    }

    

    return (
        <CreateConsultantContainer>
            <div className="create">
                <h1>Create new consultant</h1>
            </div>

            <form>
                
                <div>
                    <label>
                        <p>Display Name *</p>
                        <input type="text" name="display_name" onChange={e => setDisplayName(e.target.value)} required></input>
                    </label>
                    <label>
                        <p>First Name *</p>
                        <input type="text" name="first_name" onChange={e => setFirstname(e.target.value)} required></input>
                        <p>Last Name *</p>
                        <input type="text" name="last_name" onChange={e => setLastname(e.target.value)} required></input>
                    </label>
                    <label>
                        <p>Title</p>
                        <input type="text" name="title" onChange={e => setTitle(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Category *</p>
                        <select name="role_category" onChange={e => setRole(e.target.value)} required>
                            <option value="">Select a value ...</option>
                            <option value="frontend">Frontend Developer</option>
                            <option value="backend">Backend Developer</option>
                            <option value="fullstack">Full Stack Developer</option>
                            <option value="devops">DevOps Developer</option>
                        </select>
                    </label>
                
                    <label>
                        <p>Country *</p>
                        <input name="country" onChange={e => setCountry(e.target.value)} required>
                        </input>
                    </label>
                    </div>
                    <div>
                    <label>
                        <p>City *</p>
                        <input type="text" name="city" onChange={e => setCity(e.target.value)} required></input>
                    </label>
                    <label>
                        <p>Office *</p>
                        <select name="office_category" onChange={e => setOfficeCat(e.target.value)} required>
                            <option value="">Select a value ...</option>
                            <option value="Bern">Bern</option>
                            <option value="Zurich">Zurich</option>
                            <option value="Baden">Baden</option>
                            <option value="Geneva">Geneva</option>
                        </select>
                    </label>
                    <label>
                        <p>Manager</p>
                        <input type="text" name="manager_display_name" onChange={e => setManager(e.target.value)}></input>
                    </label>
                
                    <label>
                        <p>LinkedIn</p>
                        <input type="url" name="linked_in_link" onChange={e => setLinkedIn(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" name="email" onChange={e => setEmail(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Primary Language</p>
                        <input type="text" name="primary_language" onChange={e => setPrmLang(e.target.value)}></input>
                    </label>
                    </div>
                    <div>
                    <label>
                        <p>Language Skills</p>
                        <input type="text" name="language_skills" onChange={e => setLangSkill(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Skills</p>
                        <input type="text" name="managed_skills" onChange={e => setSkill(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Additional Skills</p>
                        <input type="text" name="addition_skills" onChange={e => setAddSkill(e.target.value)}></input>
                    </label>
                    <div>
                        <label>
                            <p>Image</p>
                            <input value={imageData.image_path} id="select" multiple type="file" name="image_path" accept='image/' onChange={handleUpload}></input>
                        </label>
                    </div>
                </div>
            </form>
            <div>
                    <button type={"submit"} onClick={createConsultant}>SUBMIT</button>
            </div>
        </CreateConsultantContainer>
    )
}
export default CreateConsultant;