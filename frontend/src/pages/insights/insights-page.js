import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { InsightsContainer, WidgetFlexWrap, MainFlexWrap, ChartsFlexWrap, HeaderStyle, SideNavStyle } from "./insights.styles"
import MyResponsivePie from "../../components/Piechart/Piechart"
import MyResponsiveBar from "../../components/BarChart/BarChart"
import MyResponsiveChoropleth from "../../components/MapChart/MapChart"
import Widget from "../../components/Widgets/Widget"
import { BsFillPersonFill } from "react-icons/bs";


const InsightsPage = () => {
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
                        <Widget name="TOTAL EMPLOYEES" num="160" icon={<BsFillPersonFill width={22} height={22} color={'#000'}/>}/>
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
