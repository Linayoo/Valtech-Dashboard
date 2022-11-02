import { FilterContainer, Flex } from "./Filter.styles"
import { useState } from "react"

const Filter = () => {

    const [formData, setFormData] = useState(
        {name: "",
        title: "",
        date: "",
        street: "",
        country: "",
        skills: "",
        language: "",
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
    return (
        <FilterContainer>
            <h1>Consultants</h1>
            <Flex>
            <form>
                <input type="text" name="name" placeholder="Filter by name" onChange = {handleChange}/>
                <input type="text" name="title" placeholder="Filter by title" onChange = {handleChange}/>
                <input type="date" name="date" onChange = {handleChange}/>
                <select value={formData.country} name="country" onChange={handleChange} >
                    <option value="">Select a country ...</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Netherlands</option>
                    <option value="france">France</option>
                </select>
                <select value={formData.skills} name="skills" onChange={handleChange} >
                    <option value="">Select a skill</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Full-Stack</option>
                    <option value="devops">DevOps</option>
                </select>
                <select value={formData.language} name="language" onChange={handleChange} >
                    <option value="">Select a language</option>
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="italian">Italian</option>
                    <option value="swiss">Swiss</option>
                </select>
            </form>
            <button>Search</button>
            </Flex>
        </FilterContainer>
    )
}

export default Filter
