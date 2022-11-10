import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import ConsultantDetails from "../../components/Consultant-details/Consultant-details"
import { ConsultantDetailsContainer } from "./consultant-details-page.styles"


const ConsultantDetailsPage = () => {
    return (
        <ConsultantDetailsContainer>
        <Header/>
        <SideNav/>
       <ConsultantDetails/>
        </ConsultantDetailsContainer>
    )
}

export default ConsultantDetailsPage
