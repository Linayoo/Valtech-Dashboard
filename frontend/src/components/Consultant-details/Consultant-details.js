import { ConsultantDetailsWrapper, HeaderStyle, ConsultantStyle } from "./Consultant-details.styles"
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
            <hr></hr>
            <div>
                <p>Image</p>
                {/* <img src={projects.image}/> */}
            </div>
            <div>
                <p>Name</p>
                <p></p>
            </div>
            <div>
                <p>Description </p>
                <p></p>
            </div>
            <div>
                <p>External link</p>
                <p></p>
            </div>
            <div>
                <p>Project duration</p>
                <p></p>
            </div>
            <div>
                <p>Amount of consultants <br/> working on project</p>
                <p></p>
            </div>
            <div>
                <p>Tools used</p>
            </div>
        
            </div>
            
        </ConsultantDetailsWrapper>
    )
}

export default ConsultantDetails
