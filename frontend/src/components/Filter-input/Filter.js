import { FilterContainer, Flex, GridItem, HeaderStyle } from "./Filter.styles"
import { useState, useRef } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router";



const Filter = (props) => {
    
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()
    const inputref = useRef([]);

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [consultants, setConsultants] = useState();
    const [skills, setSkills] = useState();
    const [languages, setLanguages] = useState();

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    });

    const getconfig = {
        method: get,
        headers: header
    };

    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => {setConsultants(data); props.setTomapout(data)})
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));
        
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/languages/`, getconfig)
            .then(response => response.json())
            .then(data => setLanguages(data))
            .catch(error => console.log(error));

    }, []);

    const handleChange = () => {
        
        const query = {
            name: inputref.current.name.value,
            city: inputref.current.city.value,
            country: inputref.current.country.value,
            skills: inputref.current.skills.value,
            languages: inputref.current.languages.value,
            dates: inputref.current.date.value,
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

        let updatedList = [...consultants];
        updatedList = updatedList.filter(element =>
            element.display_name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            element.city.toLowerCase().indexOf(query.city.toLowerCase()) !== -1 &&
            element.country.toLowerCase().indexOf(query.country.toLowerCase()) !== -1 &&
            (element.managed_skills.some(element => element['id'] === parseInt(query.skills)) || query.skills === '0') &&
            (element.language_skills.some(element => element['id'] === parseInt(query.languages)) || query.languages === '0')
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
        handleChange()
    };

    return (
        <FilterContainer>
            <HeaderStyle>
                <h1>Consultants</h1>
                <button onClick={() => navigate(`/create/consultant`)}>Create consultant</button>
                </HeaderStyle>
            <Flex>
                <form id='filter'>
                    <input ref={ref => inputref.current.name = ref} type="text" name="name" placeholder="Filter by name" autoComplete="none" onChange={handleChange} />
                    <input ref={ref => inputref.current.city = ref} type="text" name="city" placeholder="Filter by city" autoComplete="none" onChange={handleChange} />
                    <select ref={ref => inputref.current.country = ref} name="country" onChange={handleChange}>
                        <option value="">Select a country ...</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Netherlands</option>
                        <option value="france">France</option>
                    </select>
                    <select ref={ref => inputref.current.skills = ref} name="skills" onChange={handleChange}>
                        <option value='0'>Select a skill</option>
                        {skills === undefined ? <option>Loading...</option> : skills.map(element => <option value={element.id}>{element.title}</option>)}
                    </select>
                    <select ref={ref => inputref.current.languages = ref} name="language" onChange={handleChange}>
                        <option value="0">Select a language</option>
                        {languages === undefined ? <option>Loading...</option> : languages.map(element => <option value={element.id}>{element.title} - {element.level_category}</option>)}
                    </select>
                    <GridItem>
                        <DatePicker
                            ref={ref => inputref.current.date = ref}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={update => handleDatePicker(update)}
                            isClearable={true}
                            value={dateRange}
                        />
                    </GridItem>
                </form>
            </Flex>
        </FilterContainer>
    )
}

export default Filter