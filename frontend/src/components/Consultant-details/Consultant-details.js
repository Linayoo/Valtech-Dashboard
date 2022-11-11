import { ConsultantDetailsWrapper, HeaderStyle, ConsultantStyle, FlexColumn } from "./Consultant-details.styles"
import { useNavigate } from "react-router"


const ConsultantDetails = () => {
    const navigate = useNavigate()
    return (
        <ConsultantDetailsWrapper>
            <div>
            <HeaderStyle>
            <h1>Consultant details</h1>
            <button onClick={() => navigate(`/consultant/edit`)}>Edit details</button>
            </HeaderStyle>
            <hr/>
            </div>
                <div>

                    {/* first column */}

                    <FlexColumn>
                        <div>
                                <p>Image</p>
                                <img src=""/>
                        </div>
                        <div>
                            <p>Display Name </p>
                            <p></p>
                        </div>
                        <div>
                            <p>First Name </p>
                            <p></p>
                        </div>
                        <div>
                            <p>Last Name </p>
                            <p></p>
                        </div>

                        <div>
                            <p>Username </p>
                            <p></p>
                        </div>
                        <div>
                            <p>Title</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Category </p>
                            <p></p>
                        </div>
                    </FlexColumn>

                    {/* second column */}  

                    <FlexColumn>
                    
                        <div>
                            <p>Country </p>
                            <p></p>
                        </div>
                        <div>
                            <p>City </p>
                            <p></p>
                        </div>
                        <div>
                            <p>Office </p>
                            <p></p>
                        </div>
                        <div>
                            <p>Manager</p>
                            <p></p>
                        </div>
                    
                        <div>
                            <p>LinkedIn</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Summary</p>
                            <p></p>
                        </div>
                    </FlexColumn>

                     {/* third column */}

                    <FlexColumn>
                       <div>
                            <p>Primary Language</p>
                    
                        </div>
                        <div>
                            <p>Language Skills</p>
                            
                        </div>
                        <div>
                            <p>Skills</p>
                        
                        </div>
                        <div>
                            <p>Additional Skills</p>
                        
                        </div>
                        <div>
                            <p>Educations</p>
                            
                        </div>
                        <div>
                            <p>Certificate</p>
                        
                        </div>
                        <div>
                            <p>Unavailable</p>

                        </div>
                    </FlexColumn>
                </div>
            
        </ConsultantDetailsWrapper>
    )
}

export default ConsultantDetails
