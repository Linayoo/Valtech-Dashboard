import { EditProjectContainer } from "./project-edit.styles"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useRef } from "react"
import Tags from "./Consultant-tag"
import AddTag from "./Consultant-add-tag"
import ToolTag from "./Tool-tag"
import ToolAddTag from "./Tool-add-tag"
import DatePicker from 'react-datepicker';


const EditProjects = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const inputref = useRef([])
    const navigate = useNavigate()
    const initialID = useParams().projectId

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

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
            external_link: "",
            image: "",
        }
    )
    const get = "GET"
    const patch = "PATCH";
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json"
    })
    const authheader = new Headers({
        "Authorization": `Bearer ${localToken}`
    })

        const parseStringToList = (inputString) => { return inputString.split(",").map(x => parseInt(x)) }
    
        const body = () => {    
            let newconsArray = [...consultants]
            let consmagic = ""
            newconsArray.forEach(e => consmagic = `${consmagic}${e.id},`)
            consmagic = consmagic.slice(0, -1)
            consmagic = parseStringToList(consmagic)

            let newtoolsArray = [...tools]
            let toolsmagic = ""
            newtoolsArray.forEach(e => toolsmagic = `${toolsmagic}${e.id},`)
            toolsmagic = toolsmagic.slice(0, -1)
            toolsmagic = parseStringToList(toolsmagic)

            if (consmagic.includes(NaN)) {
                consmagic = []
            }

            if (toolsmagic.includes(NaN)) {
                toolsmagic = []
            }

            let fetchbody = JSON.stringify({
                "name": formData.name,
                "description": formData.description,
                "external_link": formData.external_link,
                "assignee": consmagic,
                "tools": toolsmagic,
            })         
            return fetchbody
        }
  
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
        body: body()
    }
    const patchimage = {
        method: patch,
        headers: authheader,
        body: imgData
    }
    const patchtimeframe = {
        method: patch,
        headers: header,
        body: timeframe_body
    }

    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/${initialID}/`, getconfig)
            .then(response => response.json())
            .then((data) => {
                setFormData({
                    ...formData,
                    projectObj: data,
                    name: data.name,
                    description: data.description,
                    external_link: data.external_link,
                    image: data.image,
                });
                setConsultants(data.assignee);
                setTools(data.tools);
                setStartdate(data.time_frame.date_started);
                setEnddate(data.time_frame.date_finished);
                setTimeframeid(data.time_frame.id);
            })
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setAllcons(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setAlltools(data))
            .catch(error => console.log(error));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/patch/${initialID}/`, patchconfig)
            .catch(error => console.log(error))
            .then(fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/timeframes/${timeframeid}/`, patchtimeframe))
            .catch(error => console.log(error))
            .then(() => navigate(`/project/${initialID}/`))
    }

    const handleImgUpload = (e) => {
        e.preventDefault()
        const imageData = new FormData()
        imageData.append("image", e.target.files[0])
        (fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/patch/${initialID}/`, {
                method: patch,
                headers: authheader,
                body: imageData
              }))
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const handleImgDelete = (event) => {
        event.preventDefault()
        setImage("");
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/patch/${initialID}/`, patchimage)
        .then(setFormData(prevFormData => {return {...prevFormData, image: null}}))
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
            dates: inputref.current.date.value,
            skills: inputref.current.skills.value,
        }

        const datefilter = (element) => {
            if (element.unavailable.length === 0) {
                return true
            } else {  
                let result = true
                element.unavailable.forEach(e => {
                    let userStart = e.date_started
                    let userEnd = e.date_finished
                    let filterStart = query.dates[0]
                    let filterEnd = query.dates[1]
                    userStart = new Date(`${userStart}Z`)
                    userEnd = new Date(`${userEnd}Z`)
                    if (userStart < filterStart && (userEnd > filterStart && userEnd < filterEnd)) {
                        result = false // consultant starts a project earlier and finishes it during the filtered period
                    } else if (userStart === filterStart && userEnd > filterEnd) {
                        result = false // consultant starts a project the same time as filter start and finishes it after filter end
                    } else if (userStart === filterStart && userEnd < filterEnd) {
                        result = false // consultant starts a project the same time as filter start and finishes it before filter end
                    } else if (userStart > filterStart && userEnd < filterEnd) {
                        result = false // consultant starts project after filter start and finished it before filter end
                    } else if (userStart > filterStart && userStart === filterEnd) {
                        result = false // consultant starts a project after the filter start and finishes it the same day as filter end
                    } else if (userStart === filterStart && userEnd === filterEnd) {
                        result = false // consultant starts a project the same day as filter start and finishes it the same day as filter end
                    } else if (userStart < filterStart && userEnd > filterEnd) {
                        result = false // consultant starts a project before filter start and finishes it after filter end
                    } else if (userStart < filterStart && userEnd === filterEnd) {
                        result = false // consultant starts a project before filter start and finishes it the same day as filter end
                    } else if ((userStart > filterStart && userStart < filterEnd) && userEnd > filterEnd) {
                        result = false // consultant starts a project after filter start and finishes it after filter end
                    }
                })
                return result
            }
        }

        let updatedList = [...allcons];
        updatedList = updatedList.filter(element =>
            element.display_name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            !JSON.stringify(consultants).includes(JSON.stringify(element)) &&
            (element.managed_skills.some(element => element['id'] === parseInt(query.skills)) || query.skills === '0')
        )
        
        console.log(dateRange)
        if (query.name === "") {
            setConsresults([])
        } else {
            setConsresults(updatedList)
        }

        if (query.dates != undefined) {
            if (query.dates[0] && query.dates[1] != null) {
                updatedList = updatedList.filter(datefilter)
                setConsresults(updatedList)
            }
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
        inputref.current.date.value = undefined
        setDateRange([null, null])
        inputref.current.name.skills = "0"
        handleUserFilter()
        let ID = JSON.parse(event.target.id).id
        let toSend = []
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${ID}/`, getconfig)
            .then(res => res.json())
            .then(data => toSend = data.unavailable)
            .then(toSend.includes(timeframeid) ? console.log('already has') : toSend.push(timeframeid))
            .then(fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/patchtf/${ID}/`, {
                method: patch,
                headers: header,
                body: JSON.stringify({
                    "unavailable" : JSON.parse(JSON.stringify(toSend)),
                })
              })).then(res => res.json())
                 .then(data => console.log(data))
                 .catch(err => console.log(err))    
    }

    const handleDeleteConsultant = (event) => {
        event.preventDefault()
        let newArray = [...consultants]
        newArray.splice(event.target.id, 1);
        setConsultants(newArray)
        let ID = (JSON.parse(event.target.name)).id
        console.log(ID)
        let toSend = []
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${ID}/`, getconfig)
            .then(res => res.json())
            .then(data => toSend = data.unavailable)
            .then(toSend.includes(timeframeid) ? toSend = toSend.filter(item => item != timeframeid) : console.log('already deleted'))
            .then(fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/patchtf/${ID}/`, {
                method: patch,
                headers: header,
                body: JSON.stringify({
                    "unavailable" : JSON.parse(JSON.stringify(toSend)),
                })
              })).then(res => res.json())
                 .then(data => console.log(data))
                 .catch(err => console.log(err))    
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

    const handleDatePicker = (update) => {
        inputref.current.date.value = update;
        setDateRange(update);
        handleUserFilter()
    };

    return (
        <EditProjectContainer >
            <h1>Edit Project</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Image
                    {formData.image === null ? <></> : <button className="submitty" onClick={handleImgDelete}>Remove</button>}
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
                    <input value={formData.external_link} type="textarea" name="external_link" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Start - end
                    <div className="dates">
                        <input value={startdate === undefined ? '' : startdate} type="date" name="start_date" onChange={e => setStartdate(e.target.value)}
                        className="datepicker" />
                        <input value={enddate === undefined ? '' : enddate} type="date" name="end_date" onChange={e => setEnddate(e.target.value)} 
                        className="datepicker"/> 
                    </div>
                </label>
                <label htmlFor="">
                    Add consultants to project
                    <div className="consultant-search">
                        <input ref={ref => inputref.current.name = ref} type='text' placeholder='Search for consultants...' onChange={handleUserFilter} />
                        <select ref={ref => inputref.current.skills = ref} name="skills" onChange={handleUserFilter}>
                        <option value='0'>Select a skill</option>
                        {alltools === undefined ? <option>Loading...</option> : alltools.map(element => <option value={element.id}>{element.title}</option>)}
                    </select>
                    <DatePicker
                            ref={ref => inputref.current.date = ref}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={update => handleDatePicker(update)}
                            isClearable={true}
                            value={dateRange}
                            placeholderText={"Select date range"}
                            className={"placeholder"}
                        />
                        
                    </div>
                    <div className="consultant-search">
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
                <button className="submit-button" type="submit">Save changes</button>
            </form>
        </EditProjectContainer>

    )
}

export default EditProjects