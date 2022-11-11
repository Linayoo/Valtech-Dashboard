import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ConsultantEditContainer, SideNavContainer } from "./consultant-edit-page.styles"
import EditConsultant from "../../components/Consultant-edit/Consultant-edit"



const ConsultantEditPage = () => {
    return (
        <ConsultantEditContainer>
        <Header/>
        <SideNavContainer>
        <SideNav/>
        </SideNavContainer>
        <EditConsultant/>
        </ConsultantEditContainer>
    )
}

export default ConsultantEditPage
