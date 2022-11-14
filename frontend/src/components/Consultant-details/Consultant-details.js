import { ConsultantDetailsWrapper, HeaderStyle, ConsultantStyle, FlexColumn } from "./Consultant-details.styles"
import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react"



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
          .then(data =>  {console.log(data); setConsultant(data)})
          .catch(error => console.log(error));

    },[])


    return (
        <div>
        <ConsultantDetailsWrapper>
            <div>
            <HeaderStyle>
            <h1>Consultant details</h1>
            <button onClick={() => navigate(`consultant/${initialID}/edit`)}>Edit details</button>
            <button className="deleteButton" onClick={handleDelete}>Delete consultant</button>
            </HeaderStyle>
            <hr/>
            </div>
                <div>

                    {/* first column */}

                    <FlexColumn>
                        <div>
                                <p>Image</p>
                                <img src={consultant && consultant.image_path}/>
                        </div>
                        <div>
                            <p>Display Name </p>
                            <p>{consultant === undefined ? "not provided" : consultant.display_name}</p>
                        </div>
                        <div>
                            <p>First Name </p>
                            <p>{consultant === undefined ? "not provided": consultant.first_name }</p>
                        </div>
                        <div>
                            <p>Last Name </p>
                            <p>{consultant === undefined ? "not provided" : consultant.last_name}</p>
                        </div>

                        <div>
                            <p>Username </p>
                            <p>{consultant === undefined ? "not provided" : consultant.username}</p>
                        </div>
                        <div>
                            <p>Title</p>
                            <p>{consultant === undefined ? "not provided" : consultant.title }</p>
                        </div>
                        <div>
                            <p>Category </p>
                            <p>{consultant === undefined ? "not provided" : consultant.role_category}</p>
                        </div>
                    </FlexColumn>

                    {/* second column */}  

                    <FlexColumn>
                    
                        <div>
                            <p>Country </p>
                            <p>{consultant === undefined ? "not provided" : consultant.country }</p>
                        </div>
                        <div>
                            <p>City </p>
                            <p>{consultant === undefined ? "not provided" : consultant.city}</p>
                        </div>
                        <div>
                            <p>Office </p>
                            <p>{consultant === undefined ? "not provided" : consultant.office_category}</p>
                        </div>
                        <div>
                            <p>Manager</p>
                            <p>{consultant === undefined ? "not provided" : consultant.manager_display_name}</p>
                        </div>
                    
                        <div>
                            <p>LinkedIn</p>
                            <p>{consultant === undefined ? "not provided" : consultant.linked_in_link }</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>{consultant === undefined ? "not provided" : consultant.email}</p>
                        </div>
                        <div>
                            <p>Summary</p>
                            <p>{consultant === undefined ? "not provided" : consultant.summary}</p>
                        </div>
                    </FlexColumn>

                     {/* third column */}

                    <FlexColumn>
                       <div>
                            <p>Primary Language</p>
                            <p>{consultant === undefined ? "not provided" : consultant.primary_language}</p>
                        </div>
                        <div>
                            <p>Language Skills</p>
                            <p>{consultant === undefined ?  "not provided" : consultant.language_skills.map(element => <h5>-{element.title}</h5>) }</p>
                        </div>
                        <div>
                            <p>Skills</p>
                            <p>{consultant === undefined ? "not provided" : consultant.managed_skills.map(element => <h5>- {element.title}</h5>) }</p>
                        </div>
                        <div>
                            <p>Additional Skills</p>
                            <p>{consultant === undefined ? "not provided" : consultant.addition_skills.map(element => <h5>- {element.title}</h5>) } </p>
                        </div>
                        <div>
                            <p>Educations</p>
                            <p>{consultant === undefined ?  "not provided" : consultant.educations.map(element => <h5> - {element.title}</h5>)}</p>
                        </div>
                        <div>
                            <p>Certificate</p>
                            <p>{consultant === undefined ?  "not provided" : consultant.certificates.map(element => <h5>- {element.title}</h5>)}</p>
                        </div>
                        <div>
                            <p>Unavailable</p>
                            <p>{consultant === undefined ? "not provided" : consultant.unavailable.map(element => <h5> -{element.title}</h5>)}</p>
                        </div>
                    </FlexColumn>
                </div>
        </ConsultantDetailsWrapper>
     </div>
    )
}

export default ConsultantDetails
