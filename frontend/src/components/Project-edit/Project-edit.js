import { EditProjectContainer } from "./project-edit.styles"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRef } from "react"
import Tags from "./Consultant-tag"
import AddTag from "./Consultant-add-tag"
import ToolTag from "./Tool-tag"
import ToolAddTag from "./Tool-add-tag"


const EditProjects = () => {

    const inputref = useRef([])
    const navigate = useNavigate()
    // form state 
    const [allcons, setAllcons] = useState()
    const [consultants, setConsultants] = useState([])
    const [consresults, setConsresults] = useState()
    const [alltools, setAlltools] = useState()
    const [tools, setTools] = useState([])
    const [toolsresults, setToolsresults] = useState()   
    const [formData, setFormData] = useState(
        {
            projectObj: [],
            name: "",
            description: "",
            link: "",
            image: "",
            date: "",
        }
    )

    // fetch data 

    const get = "GET"
    const patch = "PATCH";
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
        "content-type": "application/json",
    })

    const body = JSON.stringify({
        "name": formData.name,
        "description": formData.description,
        "link": formData.link,
        "image": formData.image,
        "date": formData.date,
        "consultants": formData.consultants,
        // "tools": JSON.parse(JSON.stringify(tools))
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

    useEffect((state) => {
        fetch("http://localhost:8000/api/projects/1/", getconfig)
            .then(response => response.json())
            .then((data) => {
                // setFormData.projectObj(data);
                setFormData({
                    ...formData,
                    projectObj: data,
                    name: data.name,
                    description: data.description,
                    link: data.external_link,
                    image: data.image,
                    // date: time_frame,
                    // consultants: data.assignee,

                });
                setConsultants(data.assignee);
                setTools(data.tools)
            })
            .catch()
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
        fetch("http://localhost:8000/api/projects/1/", patchconfig)
            .then(response => response.json())
            .then((data) => { navigate("/project/1/") })
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
            element.display_name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1      
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
            element.title.toLowerCase().indexOf(query.tools.toLowerCase()) !== -1      
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
        console.log(consultants)
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
        console.log(consultants)
    }

    const handleDeleteTool = (event) => {
        event.preventDefault()
        let newArray = [...tools]
        newArray.splice(event.target.id, 1);
        setTools(newArray)
    }


    return (
        <EditProjectContainer>
            <h1>Edit Project</h1>
            <hr />

            <form className="search">
                <input ref={ref => inputref.current.name = ref} type='text' placeholder='Search for employees' onChange={handleUserFilter} />
                <input ref={ref => inputref.current.tools = ref} type='text' placeholder='Search for tools' onChange={handleToolFilter} />
            </form>
            <div className="tags">
            {consresults === undefined ? "" : consresults.map((element, index) => <AddTag  element={element} add={handleAddConsultant}/>)}
            {toolsresults === undefined ? "" : toolsresults.map((element, index) => <ToolAddTag  element={element} add={handleAddTool}/>)}
            {tools === undefined ? "" : tools.map((element, index) => <ToolTag id={index} tool={element} remove={handleDeleteTool}/>)}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Image
                    <img src={formData.image} />
                    <input type="file" name="image" onChange={handleChange} />
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
                    <input type="date" name="date" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Add consultants to project
                    <input type="text" name="consultants" onChange={handleChange} />
                    {consultants === undefined ? "" : consultants.map((element, index) => <Tags id={index} consultant={element} remove={handleDeleteConsultant}/>)}
                </label>
                <button type="submit">Save changes</button>
            </form>
        </EditProjectContainer>

    )
}

export default EditProjects
