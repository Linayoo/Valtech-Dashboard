import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { ConsultantCreateContainer } from "./consultant-create-page.styles"
import CreateConsultant from "../../components/Consultant-create/Consultant-create"


const ConsultantCreatePage = () => {
    return (
        <ConsultantCreateContainer>
        <Header/>
        <SideNav/>
        <CreateConsultant/>
        </ConsultantCreateContainer>
    )
}

export default ConsultantCreatePage
