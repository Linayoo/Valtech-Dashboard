import { ProjectFilterContainer, Flex, GridItem } from "./project-filter.styles"
import { useState } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ProjectFilter = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
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
        <div>
              
        <ProjectFilterContainer>
           
            <h1>Projects</h1>
           
            <Flex>
            <form>
                <input type="text" name="name" placeholder="filter by project name" onChange = {handleChange}/>
                <GridItem>
                 <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                placeholderText={'select project date'}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                />
                </GridItem>
                <input type="text" name="client" placeholder="filter by client name" onChange = {handleChange}/>
                
                <select value={formData.country} name="country" onChange={handleChange} >
                    <option value="">select a country ...</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Netherlands</option>
                    <option value="france">France</option>
                </select>
                <select value={formData.status} name="status" onChange={handleChange} >
                    <option value="">select status</option>
                    <option value="open">open</option>
                    <option value="demo">demo</option>
                    <option value="closed">closed</option>
                </select>
            </form>
            <button>Search</button>
            </Flex>
        </ProjectFilterContainer>
             
        </div>
    )
}

export default ProjectFilter
