import { ConsultantDetailsWrapper, HeaderStyle, ConsultantStyle, FlexColumn } from "./Consultant-details.styles"
import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react"
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { GrUserManager } from 'react-icons/gr'



const ConsultantDetails = (props) => {
    const navigate = useNavigate()
    let localToken = localStorage.getItem("valtech-auth")
    const initialID = useParams().consultantId


    const [consultant, setConsultant] = useState()

    const get = "GET"
    const deleteMethod = "DELETE"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })
    const getconfig = {
        method: get,
        headers: header
    }
    const deleteConfig = {
        method: deleteMethod,
        headers: header
    }

    const handleDelete = () => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${initialID}/`, deleteConfig)
            .then(response => {
                response.json();
                navigate(`../../consultants/`)
            })
            .catch(error => console.log(error))
    }

    useEffect((state) => {
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/${initialID}/`, getconfig)
            .then(response => response.json())
            .then(data => { console.log(data); setConsultant(data) })
            .catch(error => console.log(error));

    }, [])


    return (
        <div>
            <ConsultantDetailsWrapper>
                <div>
                    <HeaderStyle>
                        <h1>Consultant details</h1>
                        <button onClick={() => navigate(`consultant/${initialID}/edit`)}>Edit details</button>
                        <button className="deleteButton" onClick={handleDelete}>Delete consultant</button>
                    </HeaderStyle>
                    <hr />
                </div>
                <div>

                    {/* first column */}
                    <div className="wrapper">
                        <FlexColumn>
                            <div className="img-basic-info-section">
                                <div className="img-section">
                                    <div>
                                        <img src={consultant && consultant.image_path} />
                                    </div>
                                </div>
                                <div className="basic-info-section">
                                    <div className="consultant-location-section">
                                        <p className="consultant-location">{consultant === undefined ? "not provided" : consultant.city}, {consultant === undefined ? "not provided" : consultant.country}</p>
                                    </div>
                                    <div>
                                        <p className="consultant-name">{consultant === undefined ? "not provided" : consultant.display_name}</p>
                                    </div>
                                    <div>
                                        <p className="consultant-title">{consultant === undefined ? "not provided" : consultant.title}</p>
                                    </div>
                                    <div>
                                        <AiOutlineMail size="18px" />
                                        <p className="email">{consultant === undefined ? "not provided" : consultant.email}</p>
                                    </div>
                                    <div>
                                        <HiOutlineOfficeBuilding size="18px" />
                                        <p className="office">{consultant === undefined ? "not provided" : consultant.office_category}</p>
                                    </div>
                                    <div>
                                        <GrUserManager size="18px" />
                                        <p className="manager">{consultant === undefined ? "not provided" : consultant.manager_display_name}</p>
                                    </div>
                                </div>
                            </div>
                        </FlexColumn>
                        <FlexColumn>
                            <div className="summary-section">
                                <p className="summary">"{consultant === undefined ? "not provided" : consultant.summary}"</p>
                            </div>
                        </FlexColumn>


                        {/* second column */}

                        <FlexColumn>
                            <div className="more-info-section">
                            <div className="skills-section">
                                <p className="skills-left">Skills</p>
                                <div className="skills-right">{consultant === undefined ? "not provided" : consultant.managed_skills.map(element => <h4>{element.title}</h4>)}</div>
                            </div>
                            <div>
                                <p className="left">LinkedIn</p>
                                <p className="right linkedin"><a href={consultant === undefined ? "not provided" : consultant.linked_in_link} target="_blank">Click to the link</a></p>
                            </div>


                            <div>
                                <p className="left">Primary Language</p>
                                <p className="right"><h4>{consultant === undefined ? "not provided" : consultant.primary_language}</h4></p>
                            </div>
                            <div>
                                <p className="left">Language Skills</p>
                                <p className="right">{consultant === undefined ? "not provided" : consultant.language_skills.map(element => <h4>{element.title} - {element.level_category}</h4>)}</p>
                            </div>

                            <div className="last">
                                <p className="left">Additional Skills</p>
                                <p className="right">{consultant === undefined ? "not provided" : consultant.addition_skills.map(element => <h4>{element.title}</h4>)} </p>
                            </div>
                        </div>
                        </FlexColumn>
                    </div>
                </div>
            </ConsultantDetailsWrapper>
        </div>
    )
}

export default ConsultantDetails
