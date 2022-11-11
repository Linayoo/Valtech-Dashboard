import React, { useState, useEffect, useRef } from "react";
import { CreateProjectContainer } from "./Project-create.styles";
import { useNavigate } from "react-router";
import ToolTag from "../Project-edit/Tool-tag";
import ToolAddTag from "../Project-edit/Tool-add-tag";
import Tags from "../Project-edit/Consultant-tag";
import AddTag from "../Project-edit/Consultant-add-tag";

const CreateProject = () => {
    const navigate = useNavigate()
    const inputref = useRef([])
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState(null)
    const [startdate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [sendtools, setSendtools] = useState("")
    const [sendconsultants, setSendconsultants] = useState("")


    const [allcons, setAllcons] = useState()
    const [consultants, setConsultants] = useState([])
    const [consresults, setConsresults] = useState()
    const [alltools, setAlltools] = useState()
    const [tools, setTools] = useState([])
    const [toolsresults, setToolsresults] = useState()

    const post = "POST"
    const get = "GET"
    const headers = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MjQ5MzMwLCJpYXQiOjE2Njc4MTczMzAsImp0aSI6ImFiMDk5Yzg3MjRkMTRmY2NiYThmZGQ1Y2JkZjU5OWQ2IiwidXNlcl9pZCI6MX0.2E0ZLI8aE0DWzogP_ORPWWFLfTIE44p57eDzQX5WYZc`,
        'content-type': 'application/json'
    })

    const parseStringToList = (inputString) => { return inputString.split(",").map(x => parseInt(x)) }

    const project = JSON.stringify({
        "name": `${projectName}`,
        "description": `${projectDescription}`,
        "external_link": `${link}`,
        "image": `${image}`,
        "tools": parseStringToList(sendtools),
        "time_frame": {
            "date_started": `${startdate}`,
            "date_finished": `${endDate}`
        },
        "assignee": parseStringToList(sendconsultants),
    })

    const projectConfig = {
        method: post,
        headers: headers,
        body: project,
    }
    const getconfig = {
        method: get,
        headers: headers
    }


    useEffect((state) => {
        fetch(`http://localhost:8000/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setAllcons(data))
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setAlltools(data))
            .catch(error => console.log(error));
    }, [])

    const createProject = (event) => {
        event.preventDefault();
        console.log(projectConfig.body)
        fetch(`http://localhost:8000/api/projects/new/`, projectConfig)
            .then(response => response.json())
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

    const handleAddConsultant = (event) => {
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
    }

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



    return (
        <CreateProjectContainer>
            <h1>Let's create a new Project!</h1>
            <button type='submit' form='test'>SEND IT BABY</button>
            <hr />
            <form id='test' onSubmit={createProject}>
                <div>
                    Project Name
                    <input form='test' type='text' name='name' onChange={(e) => setProjectName(e.target.value)}></input>
                </div>
                <div>
                    Description
                    <input form='test' type='text' onChange={(e) => setProjectDescription(e.target.value)}></input>
                </div>
                <div>
                    External Link
                    <input form='test' type='text' onChange={(e) => setLink(e.target.value)}></input>
                </div>
                <div>
                    Image
                    <input value={image} id='select' multiple type='file' name='image' accept='image/' onChange={setImage}></input>
                </div>
                <div>
                    Timeframe
                </div>
                <div className="row">
                    <input value={startdate === undefined ? '' : startdate} type="date" name="start_date" onChange={(e) => { setStartDate(e.target.value) }}
                        className="datepicker" />
                    <input value={endDate === undefined ? '' : endDate} type="date" name="end_date" onChange={e => setEndDate(e.target.value)}
                        className="datepicker" />
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
                <div>
                    Assignee
                </div>
                <div className="row">
                    <input form='test' ref={ref => inputref.current.name = ref} type='text' placeholder='Search for consultants...' onChange={handleUserFilter} />
                    {consresults === undefined ? <></> : consresults.map((element, index) => <AddTag element={element} add={handleAddConsultant} />)}
                </div>
                <div className="row">
                    {consultants === undefined ? "" : consultants.map((element, index) => <Tags id={index} consultant={element} remove={handleDeleteConsultant} />)}
                </div>

            </form>
        </CreateProjectContainer>
    )
}

export default CreateProject;