import { ProjectFilterContainer, Flex, GridItem, HeaderStyle } from "./project-filter.styles"
import { useState, useRef, useEffect } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const ProjectFilter = (props) => {
    
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()
    const inputref = useRef([])

    const [projects, setProjects] = useState()
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [skills, setSkills] = useState();

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/`, getconfig)
            .then(response => response.json())
            .then(data => { setProjects(data); props.setTomapout(data) })
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));
    }, [])

    const handleFilter = () => {

        const query = {
            name: inputref.current.name.value,
            skills: inputref.current.skills.value,
            dates: inputref.current.date.value,
        }

        const datefilter = (element) => {
            if (element.time_frame === null || element.time_frame.date_started === null || element.time_frame.date_finished === null ) {
                return false
            } else {     
                let start = element.time_frame.date_started
                let end = element.time_frame.date_finished
                start = new Date(`${start}Z`)
                end = new Date(`${end}Z`)
                if ((start >= query.dates[0]) && (end <= query.dates[1])) {
                    return true
                } else {
                    return false
                }
            }
        }

        let updatedList = [...projects];
        updatedList = updatedList.filter(element =>
            element.name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            (element.tools.some(element => element['id'] === parseInt(query.skills)) || query.skills === '0')
        )

        if (query.dates != undefined) {
            if (query.dates[0] && query.dates[1] != null) {
                updatedList = updatedList.filter(datefilter)
            }
        }

        props.setTomapout(updatedList);
    };

    const handleDatePicker = (update) => {
        inputref.current.date.value = update;
        setDateRange(update);
        handleFilter()
    };


    return (
        <div>
            <ProjectFilterContainer>
                <HeaderStyle>
                <h1>Projects</h1>
                <button onClick={() => navigate(`/create/project`)}>Create project</button>
                </HeaderStyle>
                <Flex>
                    <form>
                        <input ref={ref => inputref.current.name = ref} type="text" name="name" placeholder="Filter by name" autoComplete="none" onChange={handleFilter} />
                        <GridItem>
                            <DatePicker
                                ref={ref => inputref.current.date = ref}
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={update => handleDatePicker(update)}
                                isClearable={true}
                                value={dateRange}
                                placeholderText={"select date range"}
                                className={"placeholder"}
                            />
                        </GridItem>
                        <select ref={ref => inputref.current.skills = ref} name="skills" onChange={handleFilter}>
                            <option value='0'>Select a skill</option>
                            {skills === undefined ? <option>Loading...</option> : skills.map(element => <option value={element.id}>{element.title}</option>)}
                        </select>
                    </form>
                </Flex>
            </ProjectFilterContainer>
        </div>
    )
}

export default ProjectFilter

