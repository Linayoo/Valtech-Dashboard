import React, { useState } from "react";

const Test = () => {

    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState(null)
    const [tools, setTools] = useState("")
    const [startdate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [projectAssignee, setProjectAssignee] = useState("")

    const post = "POST"

    const headers = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MjQ5MzMwLCJpYXQiOjE2Njc4MTczMzAsImp0aSI6ImFiMDk5Yzg3MjRkMTRmY2NiYThmZGQ1Y2JkZjU5OWQ2IiwidXNlcl9pZCI6MX0.2E0ZLI8aE0DWzogP_ORPWWFLfTIE44p57eDzQX5WYZc`,
        'content-type': 'application/json'
    })

    const parseStringToList = (inputString) => { return inputString.split(",").map(Number)} 

    const project = JSON.stringify({
        "name": `${projectName}`,
        "description": `${projectDescription}`,
        "external_link": `${link}`,
        "image": `${image}`,
        "tools": parseStringToList(tools),
        "time_frame": {
            "date_started": `${startdate}`,
            "date_finished": `${endDate}`
        },
        "assignee": parseStringToList(projectAssignee)
    })

    const projectConfig = {
        method: post,
        headers: headers,
        body: project,
    }

    const createProject = (event) => {
        event.preventDefault();
        console.log(projectConfig.body)
        fetch(`http://localhost:8000/api/projects/new/`, projectConfig)
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <>
            <p>Let's create a Project!</p>
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
                    Image URL
                    <input form='test' type='file' onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <div>
                    Tools
                    <input form='test' type='text' onChange={(e) => setTools(e.target.value)}></input>
                </div>
                <div>
                    Timeframe
                    <input form='test' type='text' onChange={(e) => setStartDate(e.target.value)}></input>
                    <input form='test' type='text' onChange={(e) => setEndDate(e.target.value)}></input>
                </div>
                <div>
                    Assignee
                    <input form='test' type='text' onChange={(e) => setProjectAssignee(e.target.value)}></input>
                </div>
                <button type='submit' form='test'>SEND IT BABY</button>
            </form>
        </>
    )
}

export default Test;