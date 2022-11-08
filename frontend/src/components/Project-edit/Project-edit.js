import { EditProjectContainer } from "./project-edit.styles"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"


const EditProjects = () => {
    const navigate = useNavigate()
    // form state 
    const [formData, setFormData] = useState(
        {
        projectObj: [],
        name: "",
        description: "",
        link: "",
        image: "",
        date: "",
        consultants: "",
        }
    )

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // fetch data 

    const get = "GET"
    const patch = "PATCH";
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2Mzg3NzI4LCJpYXQiOjE2Njc3NDc3MjgsImp0aSI6Ijg0YjQ0MzEyOTUxOTRlZGJhZWRkYTlhNDNkYjcwMTI4IiwidXNlcl9pZCI6Mn0.FS1KwjKjILhd0ab6tP4fI0d675XaSgEEoORZBPCkyrM`,
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
                    // consultants: assignee,

                })
            })
            .catch()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/projects/1/", patchconfig)
            .then(response => response.json())
            .then((data) => { navigate("/project/1/") })
            .catch(error => console.log(error))
    }
    
    return (
        <EditProjectContainer>
            <h1>Edit Project</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">
                    Image
                    <img src={formData.image}/>
                    <input type="file" name="image" onChange = {handleChange}/>
                </label>
                <label htmlFor="name">
                        Name
                <input value={formData.name} type="text" name="name" onChange = {handleChange}/>
                </label>
                <label htmlFor="">
                    Description
                    <input value={formData.description} type="textarea" name="description" onChange = {handleChange}/>
                </label>
                <label htmlFor="">
                    External link
                    <input value={formData.link} type="textarea" name="link" onChange = {handleChange}/>
                </label>
                <label htmlFor="">
                    Start - end
                    <input type="date" name="date" onChange = {handleChange}/>
                </label>
                <label htmlFor="">
                    Add consultants to project
                    <input type="text" name="consultants" onChange = {handleChange}/>
                </label>
                <button type="submit">Save changes</button>
            </form>
        </EditProjectContainer>
    )
}

export default EditProjects
