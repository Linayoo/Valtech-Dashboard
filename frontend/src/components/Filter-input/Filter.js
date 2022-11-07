import { FilterContainer, Flex, GridItem } from "./Filter.styles"
import { useState, useRef } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import React from "react";
import { useSyncExternalStore } from "react";



const Filter = (props) => {

    const inputref = useRef([])

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [consultants, setConsultants] = useState()
    const [skills, setSkills] = useState()
    const [languages, setLanguages] = useState()

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2Mzg3NzI4LCJpYXQiOjE2Njc3NDc3MjgsImp0aSI6Ijg0YjQ0MzEyOTUxOTRlZGJhZWRkYTlhNDNkYjcwMTI4IiwidXNlcl9pZCI6Mn0.FS1KwjKjILhd0ab6tP4fI0d675XaSgEEoORZBPCkyrM`,
        "content-type": "application/json",
    })
    const getconfig = {
        method: get,
        headers: header
    }
    useEffect((state) => {
        fetch(`http://localhost:8000/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => {setConsultants(data); props.setTomapout(data)})
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));
        
        fetch(`http://localhost:8000/api/languages/`, getconfig)
            .then(response => response.json())
            .then(data => setLanguages(data))
            .catch(error => console.log(error));

    }, [])

    const handleNameChange = () => {
        
        const query = {
            name: inputref.current.name.value,
            city: inputref.current.city.value,
            country: inputref.current.country.value,
            skills: inputref.current.skills.value,
            languages: inputref.current.languages.value,
            dates: inputref.current.date.value,
        }

        console.log(inputref.current.date.value)

        let updatedList = [...consultants];
        updatedList = updatedList.filter(element =>
            element.display_name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            element.city.toLowerCase().indexOf(query.city.toLowerCase()) !== -1 &&
            element.country.toLowerCase().indexOf(query.country.toLowerCase()) !== -1 &&
            (element.managed_skills.some(element => element['id'] === parseInt(query.skills)) || query.skills === '0') &&
            (element.language_skills.some(element => element['id'] === parseInt(query.languages)) || query.languages === '0'))
        props.setTomapout(updatedList);
    };

    const handleDatePicker = (update) => {
        inputref.current.date.value = update;
        setDateRange(update);
        handleNameChange()
    }

    return (
        <FilterContainer>
            <h1>Consultants</h1>
            <Flex>
                <form id='filter'>
                    <input ref={ref => inputref.current.name = ref} type="text" name="name" placeholder="Filter by name" autoComplete="none" onChange={handleNameChange} />
                    <input ref={ref => inputref.current.city = ref} type="text" name="city" placeholder="Filter by city" autoComplete="none" onChange={handleNameChange} />
                    <select ref={ref => inputref.current.country = ref} name="country" onChange={handleNameChange}>
                        <option value="">Select a country ...</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Netherlands</option>
                        <option value="france">France</option>
                    </select>
                    <select ref={ref => inputref.current.skills = ref} name="skills" onChange={handleNameChange}>
                        <option value='0'>Select a skill</option>
                        {skills === undefined ? <option>Loading...</option> : skills.map(element => <option value={element.id}>{element.title}</option>)}
                    </select>
                    <select ref={ref => inputref.current.languages = ref} name="language" onChange={handleNameChange}>
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
                        />
                    </GridItem>
                </form>
            </Flex>
        </FilterContainer>
    )
}

export default Filter


/*

<DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                />

*/