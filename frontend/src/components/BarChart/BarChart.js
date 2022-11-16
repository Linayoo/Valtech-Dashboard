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
            name: projects[id].name,
            front: [],
            back: [],
            full: [],
            dev: [],
            man: [],
        }
        projects[id].assignee.forEach((element) => {
            if (element.role_category === 'frontend') {
                obj.front.push(element)
            } else if (element.role_category === 'backend') {
                obj.back.push(element)
            } else if (element.role_category === 'devops') {
                obj.dev.push(element)
            } else if (element.role_category === 'fullstack') {
                obj.full.push(element)
            } else if (element.role_category === 'manager') {
                obj.man.push(element)
            }
        })
        return obj
    }

    const data = [
        {
          "Project": `${projects === undefined ? 'Loading...' : projectfilter(0).name}`,
          "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(0).front.length}`,
          "FrontendColor": "hsl(338, 70%, 50%)",
          "Backend": `${projects === undefined ? 'Loading...' : projectfilter(0).back.length}`,
          "BackendColor": "hsl(146, 70%, 50%)",
          "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(0).full.length}`,
          "FullstackColor": "hsl(86, 70%, 50%)",
          "Devops": `${projects === undefined ? 'Loading...' : projectfilter(0).dev.length}`,
          "DevopsColor": "hsl(107, 70%, 50%)",
          "Manager": `${projects === undefined ? 'Loading...' : projectfilter(0).man.length}`,
          "ManagerColor": "hsl(339, 70%, 50%)",
          "donut": 105,
          "donutColor": "hsl(310, 70%, 50%)"
        },
        {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(1).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(1).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(1).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(1).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(1).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(1).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
          {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(2).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(2).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(2).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(2).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(2).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(2).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
          {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(3).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(3).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(3).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(3).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(3).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(3).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
          {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(4).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(4).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(4).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(4).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(4).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(4).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
          {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(6).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(6).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(6).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(6).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(6).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(6).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
          {
            "Project": `${projects === undefined ? 'Loading...' : projectfilter(7).name}`,
            "Frontend": `${projects === undefined ? 'Loading...' : projectfilter(7).front.length}`,
            "FrontendColor": "hsl(338, 70%, 50%)",
            "Backend": `${projects === undefined ? 'Loading...' : projectfilter(7).back.length}`,
            "BackendColor": "hsl(146, 70%, 50%)",
            "Fullstack": `${projects === undefined ? 'Loading...' : projectfilter(7).full.length}`,
            "FullstackColor": "hsl(86, 70%, 50%)",
            "Devops": `${projects === undefined ? 'Loading...' : projectfilter(7).dev.length}`,
            "DevopsColor": "hsl(107, 70%, 50%)",
            "Manager": `${projects === undefined ? 'Loading...' : projectfilter(7).man.length}`,
            "ManagerColor": "hsl(339, 70%, 50%)",
            "donut": 105,
            "donutColor": "hsl(310, 70%, 50%)"
          },
      ]
    
    return (
        <Wrap>
             <div>
            <p>Employee project ratio</p>
            <hr/>
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
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
      
    /> 
    </BarWrap>
    </Wrap>
  )
}

export default MyResponsiveBar
