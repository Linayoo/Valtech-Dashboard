import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { InsightsContainer, WidgetFlexWrap, MainFlexWrap, ChartsFlexWrap, HeaderStyle, SideNavStyle } from "./insights.styles"
import MyResponsivePie from "../../components/Piechart/Piechart"
import MyResponsiveBar from "../../components/BarChart/BarChart"
import MyResponsiveChoropleth from "../../components/MapChart/MapChart"
import Widget from "../../components/Widgets/Widget"
import { BsFillPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react"


const InsightsPage = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const [consultants, setConsultants] = useState()
    const [skills, setSkills] = useState()
    const [languages, setLanguages] = useState()
    const [projects, setProjects] = useState()
    const [timeframes, setTimeframes] = useState()

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json"
    })
    const getconfig = {
        method: get,
        headers: header
    }
    useEffect((state) => {
        fetch(`http://localhost:8000/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setConsultants(data))
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));
        
        fetch(`http://localhost:8000/api/languages/`, getconfig)
            .then(response => response.json())
            .then(data => setLanguages(data))
            .catch(error => console.log(error));
        
        fetch(`http://localhost:8000/api/projects/`, getconfig)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/timeframes/`, getconfig)
            .then(response => response.json())
            .then(data => setTimeframes(data))
            .catch(error => console.log(error));
    }, []);


    return (    
        <InsightsContainer>
            <HeaderStyle>
         <Header/>
         </HeaderStyle>
         <SideNavStyle>
            <SideNav/> 
            </SideNavStyle>
                <MainFlexWrap>
                    <WidgetFlexWrap>
                        <Widget name="TOTAL EMPLOYEES" num={consultants?.length} icon={<BsFillPersonFill width={22} height={22} color={'#000'}/>}/>
                        <Widget name="OPEN PROJECTS" num="7"/>
                        <Widget name="UNASSIGNED EMPLOYEE'S" num="3"/>
                        <Widget name="FINISHED PROJECTS" num="123"/>
                    </WidgetFlexWrap>    
                    <ChartsFlexWrap>
                        <MyResponsivePie/>
                        <MyResponsiveBar/>
                        <MyResponsiveChoropleth/>
                    </ChartsFlexWrap>
                </MainFlexWrap>
        </InsightsContainer>
    )
}

export default InsightsPage
