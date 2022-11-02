import { ProjectFilterContainer, Flex } from "./project-filter.styles"
import { useState } from "react"

const ProjectFilter = () => {

    const [formData, setFormData] = useState(
        {name: "",
        client: "",
        date: "",
        street: "",
        country: "",
        status: "",
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
        <ProjectFilterContainer>
            <h1>Projects</h1>
            <Flex>
            <form>
                <input type="text" name="name" placeholder="Filter by project name" onChange = {handleChange}/>
                <input type="text" name="client" placeholder="Filter by client name" onChange = {handleChange}/>
                <input type="date" name="date"  onChange = {handleChange}/>
                <select value={formData.country} name="country" onChange={handleChange} >
                    <option value="">Select a country ...</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Netherlands</option>
                    <option value="france">France</option>
                </select>
                <select value={formData.status} name="status" onChange={handleChange} >
                    <option value="">Select status</option>
                    <option value="open">open</option>
                    <option value="demo">demo</option>
                    <option value="closed">closed</option>
                </select>
            </form>
            <button>Search</button>
            </Flex>
        </ProjectFilterContainer>
    )
}

export default ProjectFilter
