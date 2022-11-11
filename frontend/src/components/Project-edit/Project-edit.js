import { EditProjectContainer } from "./project-edit.styles"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useRef } from "react"
import Tags from "./Consultant-tag"
import AddTag from "./Consultant-add-tag"
import ToolTag from "./Tool-tag"
import ToolAddTag from "./Tool-add-tag"


const EditProjects = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const inputref = useRef([])
    const navigate = useNavigate()
    const initialID = useParams().projectId

    const [allcons, setAllcons] = useState()
    const [image, setImage] = useState("")
    const [consultants, setConsultants] = useState([])
    const [consresults, setConsresults] = useState()
    const [alltools, setAlltools] = useState()
    const [tools, setTools] = useState([])
    const [toolsresults, setToolsresults] = useState()
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()
    const [timeframeid, setTimeframeid] = useState()
    const [formData, setFormData] = useState(
        {
            projectObj: [],
            name: "",
            description: "",
            link: "",
            image: "",
        }
    )
    const get = "GET"
    const patch = "PATCH";
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json"
    })
    const imgHeaders = new Headers({
        "Authorization": `Bearer ${localToken}`,
    })
    const body = JSON.stringify({
        "name": formData.name,
        "description": formData.description,
        "link": formData.link,
        "image": formData.image,
        "assignee": consultants,
        "tools": tools,
    })

    const imgData = new FormData()
    imgData.append("image", image)

    const timeframe_body = JSON.stringify({
        "date_started" : `${startdate}`,
        "date_finished" : `${enddate}`
    })
    const getconfig = {
        method: get,
        headers: header
    }
    const patchconfig = {
        method: patch,
        headers: header,
        body: body
    }
    const imgUploadConfig = {
        method: patch,
        headers: imgHeaders,
        body: imgData
    }
    const patchtimeframe = {
        method: patch,
        headers: header,
        body: timeframe_body
    }

    useEffect((state) => {
        fetch(`http://localhost:8000/api/projects/${initialID}/`, getconfig)
            .then(response => response.json())
            .then((data) => {
                setFormData({
                    ...formData,
                    projectObj: data,
                    name: data.name,
                    description: data.description,
                    link: data.external_link,
                    image: data.image,
                });
                setConsultants(data.assignee);
                setTools(data.tools);
                setStartdate(data.time_frame.date_started);
                setEnddate(data.time_frame.date_finished);
                setTimeframeid(JSON.stringify(data.time_frame.id));
            })
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setAllcons(data))
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setAlltools(data))
            .catch(error => console.log(error));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/projects/${initialID}/`, patchconfig)
            .then(response => response.json())
            .then(data => console.log(data))
            // .then(fetch(`http://localhost:8000/api/projects/${initialID}/`), imgUploadConfig)
            // .then(response => response.json())
            .then(fetch(`http://localhost:8000/api/timeframes/${timeframeid}/`, patchtimeframe))
            .then(data => console.log(data))
            // .then((data) => navigate(`/project/${initialID}/`))
            .catch(error => console.log(error))
    }

   

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
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
        inputref.current.name.value = ""
        handleUserFilter()
    }

    const handleDeleteConsultant = (event) => {
        event.preventDefault()
        let newArray = [...consultants]
        newArray.splice(event.target.id, 1);
        setConsultants(newArray)
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

    const handleImgUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setImage(imageUrl[0]);
    }

    return (
        <EditProjectContainer>
            <h1>Edit Project</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Image
                    <img src={formData.image} />
                    <input value={imgData.image} id='select' multiple type="file" name="image/" onChange={handleImgUpload} />
                </label>
                <label htmlFor="name">
                    Name
                    <input value={formData.name} type="text" name="name" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Description
                    <input value={formData.description} type="textarea" name="description" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    External link
                    <input value={formData.link} type="textarea" name="link" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Start - end
                    <div className="dates">
                        <input value={startdate === undefined ? '' : startdate} type="date" name="start_date" onChange={(e) => {setStartdate(e.target.value); console.log(startdate)}}
                        className="datepicker" />
                        <input value={enddate === undefined ? '' : enddate} type="date" name="end_date" onChange={e => setEnddate(e.target.value)} 
                        className="datepicker"/> 
                    </div>
                </label>
                <label htmlFor="">
                    Add consultants to project
                    <div className="consultant-search">
                        <input ref={ref => inputref.current.name = ref} type='text' placeholder='Search for consultants...' onChange={handleUserFilter} />
                        {consresults === undefined ? <></> : consresults.map((element, index) => <AddTag element={element} add={handleAddConsultant} />)}
                    </div>
                    <div className="consultant-onproject">
                        {consultants === undefined ? "" : consultants.map((element, index) => <Tags id={index} consultant={element} remove={handleDeleteConsultant} />)}
                    </div>
                    Add tools to project
                    <div className="tools-search">
                        <input ref={ref => inputref.current.tools = ref} type='text' placeholder='Search for tools...' onChange={handleToolFilter} />
                        {toolsresults === undefined ? <></> : toolsresults.map((element, index) => <ToolAddTag element={element} add={handleAddTool} />)}
                    </div>
                    <div className="tools-onproject">
                        {tools === undefined ? <></> : tools.map((element, index) => <ToolTag id={index} tool={element} remove={handleDeleteTool} />)}
                    </div>
                </label>
                <button className="submitty" type="submit">Save changes</button>
            </form>
        </EditProjectContainer>

    )
}

export default EditProjects