import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import Filter from "../../components/Filter-input/Filter"
import Results from "../../components/Results/Results"
import { HomeContainer } from "./home.styles"


const HomePage = () => {
    return (
        <HomeContainer>
        <Header/>
        <SideNav/>
        <div>
        <Filter/>
        <Results/>
        </div>
        </HomeContainer>
    )
}

export default HomePage
