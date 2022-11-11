import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import ConsultantDetails from "../../components/Consultant-details/Consultant-details"
import { ConsultantDetailsContainer, SideNavContainer } from "./consultant-details-page.styles"


const ConsultantDetailsPage = () => {
    return (
        <ConsultantDetailsContainer>
        <Header/>
        <SideNavContainer>
        <SideNav/>
        </SideNavContainer>
       <ConsultantDetails/>
        </ConsultantDetailsContainer>
    )
}

export default ConsultantDetailsPage
