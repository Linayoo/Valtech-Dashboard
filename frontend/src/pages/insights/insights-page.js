import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { InsightsContainer, WidgetFlexWrap, MainFlexWrap, ChartsFlexWrap } from "./insights.styles"
import MyResponsivePie from "../../components/Piechart/Piechart"
import MyResponsiveBar from "../../components/BarChart/BarChart"
import Widget from "../../components/Widgets/Widget"

const InsightsPage = () => {
    return (
        <InsightsContainer>
            <Header/>
            <SideNav/> 
                <MainFlexWrap>
                    <WidgetFlexWrap>
                        <Widget name="TOTAL EMPLOYEES" num="40"/>
                        <Widget name="TOTAL PROJECTS" num="12"/>
                        <Widget name="TOTAL ?" num="12"/>
                        <Widget name="TOTAL ?" num="12"/>
                    </WidgetFlexWrap>    
                    <ChartsFlexWrap>
                        <MyResponsivePie/>
                        <MyResponsiveBar/>
                    </ChartsFlexWrap>
                </MainFlexWrap>
        </InsightsContainer>

    )
}

export default InsightsPage
