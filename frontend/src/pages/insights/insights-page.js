import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import { InsightsContainer, WidgetFlexWrap, MainFlexWrap, ChartsFlexWrap, HeaderStyle, SideNavStyle } from "./insights.styles"
import MyResponsivePie from "../../components/Piechart/Piechart"
import MyResponsiveBar from "../../components/BarChart/BarChart"
import MyResponsiveChoropleth from "../../components/MapChart/MapChart"
import Widget from "../../components/Widgets/Widget"
import { BsFillPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react"
import { ProjectConsultantsContainer } from "../../components/Project-consultants/Project-consultants.styles"


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
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/consultants/`, getconfig)
            .then(response => response.json())
            .then(data => setConsultants(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/languages/`, getconfig)
            .then(response => response.json())
            .then(data => setLanguages(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/`, getconfig)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error));

        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/timeframes/`, getconfig)
            .then(response => response.json())
            .then(data => setTimeframes(data))
            .catch(error => console.log(error));
    }, []);

    const projectfilter = () => {
        let arr = []
        projects.forEach((e) => {
            if (new Date() > new Date(`${e.time_frame.date_started}Z`) && new Date() < new Date(`${e.time_frame.date_finished}Z`)) {
                arr.push(e)
            }
        })
        return arr.length
    }

    const employeefilter = () => {
        let available = []
        let unavailable = []
        consultants.forEach((e) => {
            if (e.unavailable.length === 0) {
                available.push(e)
            } else {
                e.unavailable.forEach((f) => {
                    if ((new Date() >= new Date(`${f.date_started}Z`)) && (new Date() <= new Date(`${f.date_finished}Z`))) {
                        unavailable.push(e)
                    } else {
                        available.push(e)
                    }
                })
            }

        })
        return available.length
    }

    const finishprojectfilter = () => {
        let arr = []
        projects.forEach((e) => {
            if (new Date() > new Date(`${e.time_frame.date_finished}Z`)) {
                arr.push(e)
            }
        })
        return arr.length
    }

    const emptyprojectfilter = () => {
        let arr = []
        projects.forEach((e) => {
            if (e.assignee.length === 0) {
                arr.push(e)
            }
        })
        return arr.length
    }

    return (
        <InsightsContainer>
            <div className="sidenav">
                <SideNav />
            </div>
            <div className="right">
                <div className="header">
                    <Header />
                </div>
                <div className="widgets">
                    <Widget name="TOTAL EMPLOYEES" num={consultants === undefined ? 'Loading...' : consultants.length} />
                    <Widget name="UNASSIGNED EMPLOYEE'S" num={consultants === undefined ? "Loading..." : employeefilter()} />
                    <Widget name="PROJECTS WITHOUT ASSIGNEE" num={projects === undefined ? "Loading..." : emptyprojectfilter()} />
                    <Widget name="OPEN PROJECTS" num={projects === undefined ? "Loading..." : projectfilter()} />
                    <Widget name="FINISHED PROJECTS" num={projects === undefined ? "Loading..." : finishprojectfilter()} />
                </div>
                <div className="charts">
                    <MyResponsivePie />
                    <MyResponsiveBar />
                </div>
                <div className="mapchart">
                <MyResponsiveChoropleth />
                </div>
                <div className="asd">/ </div>
            </div>
        </InsightsContainer>
    )
}

export default InsightsPage
