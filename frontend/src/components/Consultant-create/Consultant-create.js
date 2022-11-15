import { CreateConsultantContainer, } from "./Consultant-create.styles";
import React, { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react"
import ToolAddTag from "../Project-edit/Tool-add-tag";
import ToolTag from "../Project-edit/Tool-tag";

const CreateConsultant = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const inputref = useRef([])

    const [displayName, setDisplayName] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [title, setTitle] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [officeCat, setOfficeCat] = useState("")
    const [email, setEmail] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [prmLang, setPrmLang] = useState("")
    const [manager, setManager] = useState("")
    const [role, setRole] = useState("")
    const [langSkill, setLangSkill] = useState("")
    const [skill, setSkill] = useState("")
    const [addSkill, setAddSkill] = useState("")
    const [image, setImage] = useState("")
    const [alltools, setAlltools] = useState()
    const [tools, setTools] = useState([])
    const [toolsresults, setToolsresults] = useState()
    /*const [certificate, setCertificate] = useState("")
    const [unavailable, setUnavailable] = useState("")
    const [education, setEducation] = useState("")
    const [username, setUsername] = useState("")
    const [summary, setSummary] = useState("")*/

    const handleUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setImage(imageUrl[0]);
    }

    const post = "POST"
    const patch = "PATCH"
    const get = "GET"

    const headers = new Headers({
        "Authorization": `Bearer ${localToken}`,
        'content-type': 'application/json'
    })

    const fileUploadHeaders = new Headers({
        "Authorization": `Bearer ${localToken}`,
    })

    const parseStringToList = (inputString) => { return inputString.split(",").map(Number) }

    const body = () => {

        let newtoolsArray = [...tools]
        let toolsmagic = ""
        newtoolsArray.forEach(e => toolsmagic = `${toolsmagic}${e.id},`)
        toolsmagic = toolsmagic.slice(0, -1)
        toolsmagic = parseStringToList(toolsmagic)

        if (toolsmagic.includes(NaN)) {
            toolsmagic = []
        }

        let fetchbody = JSON.stringify({
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
            "managed_skills": toolsmagic,
            "addition_skills": parseStringToList(addSkill),
            "manager_display_name": `${manager}`,
            "role_category": `${role}`,

        })
        return fetchbody

    }

    const config = {
        method: post,
        headers: headers,
        body: body(),
    }

    const imageData = new FormData()
    imageData.append("image_path", image)

    const imageUploadConfig = {
        method: patch,
        headers: fileUploadHeaders,
        body: imageData
    }

    const getconfig = {
        method: get,
        headers: headers
    }

    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setAlltools(data))
            .catch(error => console.log(error));
    }, [])

    const createConsultant = (event) => {
        event.preventDefault();
        console.log(config.body)
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/new/`, config)
            .then(response => response.json())
            .then((data) => fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${data.id}/`, imageUploadConfig))
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    const handleToolFilter = () => {
        const query = {
            tools: inputref.current.tools.value,
        }
        let updatedList = [...alltools];
        updatedList = updatedList.filter(element =>
            element.title.toLowerCase().indexOf(query.tools.toLowerCase()) !== -1 &&
            !JSON.stringify(tools).includes(JSON.stringify(element))
        )
        if (query.tools === "") {
            setToolsresults([])
        } else {
            setToolsresults(updatedList)
        }
    }

    const handleAddTool = (event) => {
        event.preventDefault()
        let newArray = [...tools]
        newArray.push(JSON.parse(event.target.id))
        setTools(newArray)
        inputref.current.tools.value = ""
        handleToolFilter()
    }

    const handleDeleteTool = (event) => {
        event.preventDefault()
        let newArray = [...tools]
        newArray.splice(event.target.id, 1);
        setTools(newArray)
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
                    </label>
                    <label>    
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
                            <option value="manager">Manager</option>
                        </select>
                    </label>
                    <label>
                    <p>Tools</p>
                    <div className="tools-search">
                    <div className="tools-child">
                        <input className="tools-input" ref={ref => inputref.current.tools = ref} type='text' placeholder='Search for tools...' onChange={handleToolFilter} />
                        </div>
                        <div className="tools-tags">
                        {toolsresults === undefined ? <></> : toolsresults.map((element, index) => <ToolAddTag element={element} add={handleAddTool} />)}
                    </div>
                    </div>
                    <div className="tools-onproject">
                        {tools === undefined ? "" : tools.map((element, index) => <ToolTag id={index} tool={element} remove={handleDeleteTool} />)}
                    </div>
                    </label>
                </div>
                <div className="test">
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
                </div>
                <div className="test">
                    <label>
                        <p>Language Skills</p>
                        <input type="text" name="language_skills" onChange={e => setLangSkill(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Country *</p>
                        <input name="country" onChange={e => setCountry(e.target.value)} required>
                        </input>
                    </label>
                    <label>
                        <p>Additional Skills</p>
                        <input type="text" name="addition_skills" onChange={e => setAddSkill(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Primary Language</p>
                        <input type="text" name="primary_language" onChange={e => setPrmLang(e.target.value)}></input>
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

/*
<label>
<p>Skills</p>
<input type="text" name="managed_skills" onChange={e => setSkill(e.target.value)}></input>
</label>
*/