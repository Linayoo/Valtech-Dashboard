import { ResponsiveBar } from '@nivo/bar';
import { BarWrap, Wrap } from './BarChart.styles';
import { useState, useEffect } from "react"


const MyResponsiveBar = () => {

    let localToken = localStorage.getItem("valtech-auth")
    const [projects, setProjects] = useState()

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
        fetch(`https://valtech-dashboard.propulsion-learn.ch/backend/api/projects/`, getconfig)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error));
    }, []);

    const projectfilter = (id) => {
        let obj = {
            name: "",
            front: [],
            back: [],
            full: [],
            dev: [],
            man: [],
        }
        projects.filter((element) => {
            if (element.name === id) {
                obj.name = element.name
                element.assignee.forEach((a) => {
                    if (a.role_category === 'frontend') {
                        obj.front.push(element)
                    } else if (a.role_category === 'backend') {
                        obj.back.push(element)
                    } else if (a.role_category === 'devops') {
                        obj.dev.push(element)
                    } else if (a.role_category === 'fullstack') {
                        obj.full.push(element)
                    } else if (a.role_category === 'manager') {
                        obj.man.push(element)
                    }
                })
            }
        })
        return obj
    }

    const data = [
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Vogue Magazine").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Levi's").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Emirates").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Lufthansa").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Sanofi").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Cipatex").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter("Toyota").man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
        },
    ]

    return (
        <Wrap>
            <div>
                <p>Employee project ratio</p>
                <hr />
            </div>
            <BarWrap>
                <ResponsiveBar
                    data={data}
                    keys={[
                        'Frontend',
                        'Backend',
                        'Fullstack',
                        'Devops',
                        'Manager',
                    ]}
                    indexBy="Project"
                    margin={{ top: 30, right: 100, bottom: 60, left: 50 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'purple_orange' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        //     {
                        //         id: 'lines',
                        //         type: 'patternLines',
                        //         background: 'inherit',
                        //         color: '#eed312',
                        //         rotation: -45,
                        //         lineWidth: 6,
                        //         spacing: 10
                        //     }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Manager'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'Fullstack'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                '5.3'
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 8,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Project's",
                        legendPosition: 'middle',
                        legendOffset: 42
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Employee's",
                        legendPosition: 'middle',
                        legendOffset: -35
                    }}
                    labelSkipWidth={25}
                    labelTextColor={{ theme: 'background' }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    motionConfig="wobbly"
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}

                />
            </BarWrap>
        </Wrap>
    )
}

export default MyResponsiveBar
