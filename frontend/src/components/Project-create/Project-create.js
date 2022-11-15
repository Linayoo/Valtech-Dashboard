import React, { useState, useEffect, useRef } from "react";
import { CreateProjectContainer } from "./Project-create.styles";
import { useNavigate } from "react-router";
import ToolTag from "../Project-edit/Tool-tag";
import ToolAddTag from "../Project-edit/Tool-add-tag";
/*import Tags from "../Project-edit/Consultant-tag";
import AddTag from "../Project-edit/Consultant-add-tag";*/

const CreateProject = () => {
    
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()
    const inputref = useRef([])

    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [link, setLink] = useState("")
    const [startdate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [sendtools, setSendtools] = useState("")
    const [sendconsultants, setSendconsultants] = useState("")
    const [image, setImage] = useState("")

    const [allcons, setAllcons] = useState()
    const [consultants, setConsultants] = useState([])
    const [consresults, setConsresults] = useState()
    const [alltools, setAlltools] = useState()
    const [tools, setTools] = useState([])
    const [toolsresults, setToolsresults] = useState()

    const post = "POST"
    const patch = "PATCH"
    const get = "GET"
    const headers = new Headers({
        "Authorization": `Bearer ${localToken}`,
        'content-type': 'application/json'
    })
    const imgHeaders = new Headers({
        "Authorization": `Bearer ${localToken}`,
    })

    const parseStringToList = (inputString) => { return inputString.split(",").map(x => parseInt(x)) }

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
            "name": `${projectName}`,
            "description": `${projectDescription}`,
            "external_link": `${link}`,
            "tools": toolsmagic,
            "time_frame": {
                "date_started": `${startdate}`,
                "date_finished": `${endDate}`
            },
        })         
        return fetchbody
    }

    /*const project = JSON.stringify({
        "name": `${projectName}`,
        "description": `${projectDescription}`,
        "external_link": `${link}`,
        "tools": parseStringToList(sendtools),
        "time_frame": {
            "date_started": `${startdate}`,
            "date_finished": `${endDate}`
        },
        "assignee": parseStringToList(sendconsultants),
    })*/

    const imgData = new FormData()
    imgData.append("image", image)

    const projectConfig = {
        method: post,
        headers: headers,
        body: body(),
    }

    const imgUploadConfig = {
        method: patch,
        headers: imgHeaders,
        body: imgData
    }

    const getconfig = {
        method: get,
        headers: headers
    }


    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setAllcons(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setAlltools(data))
            .catch(error => console.log(error));
    }, [])

    const createProject = (event) => {
        event.preventDefault();
        console.log(projectConfig.body)
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/new/`, projectConfig)
            .then(response => response.json())
            .then((data) => fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/${data.id}/`, imgUploadConfig))
            .then(response => {
                response.json();
                navigate(`../projects/`)
            })
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    const handleUserFilter = () => {
        const query = {
            name: inputref.current.name.value,
        }

        let updatedList = [...allcons];
        updatedList = updatedList.filter(element =>
            element.display_name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            !JSON.stringify(consultants).includes(JSON.stringify(element))
        )

        if (query.name === "") {
            setConsresults([])
        } else {
            setConsresults(updatedList)
        }
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

    /*const handleAddConsultant = (event) => {
        event.preventDefault()
        let newArray = [...consultants]
        newArray.push(JSON.parse(event.target.id))
        setConsultants(newArray)
        let magic = ""
        newArray.forEach(e => magic = `${magic}${e.id},`)
        setSendconsultants(magic)
        inputref.current.name.value = ""
        handleUserFilter()
    }

    const handleDeleteConsultant = (event) => {
        event.preventDefault()
        let newArray = [...consultants]
        newArray.splice(event.target.id, 1);
        setConsultants(newArray)
        let magic = ""
        newArray.forEach(e => magic = `${magic}${e.id},`)
        setSendconsultants(magic)
    }*/

    const handleAddTool = (event) => {
        event.preventDefault()
        let newArray = [...tools]
        newArray.push(JSON.parse(event.target.id))
        setTools(newArray)
        let magic = ""
        newArray.forEach(e => magic = `${magic}${e.id},`)
        setSendtools(magic)
        inputref.current.tools.value = ""
        handleToolFilter()
    }

    const handleDeleteTool = (event) => {
        event.preventDefault()
        let newArray = [...tools]
        newArray.splice(event.target.id, 1);
        setTools(newArray)
        let magic = ""
        newArray.forEach(e => magic = `${magic}${e.id},`)
        setSendtools(magic)
    }

    const handleImgUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setImage(imageUrl[0]);
    }



    return (
        <CreateProjectContainer>
            <h1>Create new project</h1>
            <form id='test' onSubmit={createProject}>
                <div>
                    Project Name *
                    <input form='test' type='text' name='name' onChange={(e) => setProjectName(e.target.value)} required></input>
                </div>
                <div>
                    Description *
                    <input form='test' type='text' onChange={(e) => setProjectDescription(e.target.value)} required></input>
                </div>
                <div>
                    External Link
                    <input form='test' type='text' onChange={(e) => setLink(e.target.value)}></input>
                </div>
                <div>
                    Image
                    <input value={imgData.image} id='select' multiple type='file' name='image' accept='image/' onChange={handleImgUpload}></input>
                </div>
                <div>
                    Timeframe *
                </div>
                <div className="row">
                    <input value={startdate === undefined ? '' : startdate} type="date" name="start_date" onChange={(e) => { setStartDate(e.target.value) }}
                        className="datepicker" required />
                    <input value={endDate === undefined ? '' : endDate} type="date" name="end_date" onChange={e => setEndDate(e.target.value)}
                        className="datepicker" required />
                </div>
                <div>
                    Tools
                </div>
                <div className="row">
                    <input form='test' ref={ref => inputref.current.tools = ref} type='text' placeholder='Search for tools...' onChange={handleToolFilter} />
                    {toolsresults === undefined ? <></> : toolsresults.map((element, index) => <ToolAddTag element={element} add={handleAddTool} />)}
                </div>
                <div className="row">
                    {tools === undefined ? "" : tools.map((element, index) => <ToolTag id={index} tool={element} remove={handleDeleteTool} />)}
                </div>
                {/*<div>
                    Assignee
                </div>
                <div className="row">
                    <input form='test' ref={ref => inputref.current.name = ref} type='text' placeholder='Search for consultants...' onChange={handleUserFilter} />
                    {consresults === undefined ? <></> : consresults.map((element, index) => <AddTag element={element} add={handleAddConsultant} />)}
                </div>
                <div className="row">
                    {consultants === undefined ? "" : consultants.map((element, index) => <Tags id={index} consultant={element} remove={handleDeleteConsultant} />)}
                </div>*/}
                <div>
                    <button type='submit' form='test'>SUBMIT</button>
                </div>

            </form>
        </CreateProjectContainer>
    )
}

export default CreateProject;