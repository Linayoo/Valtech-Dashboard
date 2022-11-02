import React, { useState } from "react";

const Test = () => {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [projectName, setProjectName] = useState()
    const [projectDescription, setProjectDescription] = useState()
    const [projectTimeFrame, setProjectTimeFrame] = useState()
    const [consultantTimeFrame, setConsultantTimeFrame] = useState({
        'unavailable': []
    })
    const [projectAssignee, setProjectAssignee] = useState({
        'assignee': []
    })

    // console.log(projectAssignee.assignee)

    const assigneeHandleChange = (event) => {
        setProjectAssignee(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const timeframeHandleChange = (event) => {
        setConsultantTimeFrame(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const patch = "PATCH"
    const post = "POST"

    const headers = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODE2MzAwLCJpYXQiOjE2NjczODQzMDAsImp0aSI6IjZkNGFjN2RjZGM5YjQyMjE5OTU2MjQ1MzZhNDczMTdkIiwidXNlcl9pZCI6MX0.SKPN0pUVSu0sjAIG4vD5XXilzVLu8RKvGq035D4lDeM`,
        'content-type': 'application/json'
    })

    const timeframe = JSON.stringify({
        "date_started": `${startDate}`,
        "date_finished": `${endDate}`,
    })

    const project = JSON.stringify({
        "name": `${projectName}`,
        "description": `${projectDescription}`,
        "time_frame": `${projectTimeFrame}`,
    })

    const consultant = JSON.stringify({
        "unavailable": JSON.parse(`[${consultantTimeFrame.unavailable}]`),
    })

    const assignee = JSON.stringify({
        "assignee": JSON.parse(`[${projectAssignee.assignee}]`),
    })

    const timeframeConfig = {
        method: post,
        headers: headers,
        body: timeframe,
    }

    const projectConfig = {
        method: post,
        headers: headers,
        body: project,
    }

    const consultantConfig = {
        method: patch,
        headers: headers,
        body: consultant,
    }

    const assigneeConfig = {
        method: patch,
        headers: headers,
        body: assignee,
    }

   

    const fetchTimeFrame = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/timeframes/new/`, timeframeConfig)
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    const fetchProject = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/projects/new/`, projectConfig)
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    const patchAssignee = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('assignee', projectAssignee.assignee);   //append the values with key, value pair
        fetch('http://localhost:8000/api/projects/6/', assigneeConfig)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    const fetchConsultant = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('unavailable', consultantTimeFrame.unavailable);
        console.log(consultant)
        fetch(`http://localhost:8000/api/consultants/2/`, consultantConfig)
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <>
            <p>Create Timeframe</p>
            <form id='test' onSubmit={fetchTimeFrame}>
                <input form='test' type='text' onChange={(e) => setStartDate(e.target.value)}></input>
                <input form='test' type='text' onChange={(e) => setEndDate(e.target.value)}></input>
                <button type='submit' form='test'>SEND IT BABY</button>
            </form>
            <p>Create Project</p>
            <form id='project' onSubmit={fetchProject}>
                <input form='project' type='text' onChange={(e) => setProjectName(e.target.value)}></input>
                <input form='project' type='text' onChange={(e) => setProjectDescription(e.target.value)}></input>
                <input form='project' type='text' onChange={(e) => setProjectTimeFrame(e.target.value)}></input>
                <button type='submit' form='project'>SEND IT TO PROJECT BABY</button>
            </form>
            <p>Patch Assignee to the Project</p>
            <form id='assignee' onSubmit={patchAssignee}>
                <input form='assignee' name="assignee" type='text' onChange={assigneeHandleChange}></input>
                <button type='submit' form='assignee'>SEND IT TO PROJECT BABY</button>
            </form>
            <p>Patch availability</p>
        <form id='consultant' onSubmit={fetchConsultant}>
            <input form='consultant' name="unavailable" type='text' onChange={timeframeHandleChange}></input>
            <button type='submit' form='consultant'>SEND IT TO USER BABY</button>
        </form>
        </>
    )
}

export default Test;