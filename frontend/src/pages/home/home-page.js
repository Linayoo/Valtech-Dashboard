import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import Filter from "../../components/Filter-input/Filter"
import Results from "../../components/Results/Results"
import { HomeContainer } from "./home.styles"
import React, { useEffect, useState } from "react";


const HomePage = () => {
    
    const [tomapout, setTomapout] = useState()

    return (
        <HomeContainer>
        <Header/>
        <SideNav/>
        <div>
        <Filter setTomapout={setTomapout} tomapout={tomapout}/>
        <Results consultants={tomapout}/>
        </div>
        </HomeContainer>
    )
}

export default HomePage
