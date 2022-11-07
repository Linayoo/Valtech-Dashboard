import { ResponsiveBar } from '@nivo/bar';
import { BarWrap, Wrap } from './BarChart.styles';

const data = [
    {
      "Project": "Lufthansa",
"Frontend": 1,
"FrontendColor": "hsl(338, 70%, 50%)",
      "Backend": 3,
      "BackendColor": "hsl(146, 70%, 50%)",
      "Fullstack": 2,
      "FullstackColor": "hsl(86, 70%, 50%)",
      "Devops": 3,
      "DevopsColor": "hsl(107, 70%, 50%)",
      "Manager": 2,
      "ManagerColor": "hsl(339, 70%, 50%)",
      "donut": 1,
      "donutColor": "hsl(310, 70%, 50%)"
    },
    {
      "Project": "Toyota",
"Frontend": 6,
"FrontendColor": "hsl(217, 70%, 50%)",
      "Backend": 3,
      "BackendColor": "hsl(49, 70%, 50%)",
      "Fullstack": 2,
      "FullstackColor": "hsl(24, 70%, 50%)",
      "Devops": 1,
      "DevopsColor": "hsl(165, 70%, 50%)",
      "Manager": 1,
      "ManagerColor": "hsl(290, 70%, 50%)",
      "donut": 105,
      "donutColor": "hsl(80, 70%, 50%)"
    },
    {
      "Project": "Pantene",
"Frontend": 1,
"FrontendColor": "hsl(95, 70%, 50%)",
      "Backend": 4,
      "BackendColor": "hsl(264, 70%, 50%)",
      "Fullstack": 2,
      "FullstackColor": "hsl(158, 70%, 50%)",
      "Devops": 1,
      "DevopsColor": "hsl(107, 70%, 50%)",
      "Manager": 1,
      "ManagerColor": "hsl(251, 70%, 50%)",
      "donut": 66,
      "donutColor": "hsl(74, 70%, 50%)"
    },
    {
      "Project": "Valtech",
"Frontend": 4,
"FrontendColor": "hsl(278, 70%, 50%)",
      "Backend": 4,
      "BackendColor": "hsl(323, 70%, 50%)",
      "Fullstack": 1,
      "FullstackColor": "hsl(20, 70%, 50%)",
      "Devops": 1,
      "DevopsColor": "hsl(149, 70%, 50%)",
      "Manager": 1,
      "ManagerColor": "hsl(228, 70%, 50%)",
      "donut": 3,
      "donutColor": "hsl(38, 70%, 50%)"
    },
    {
      "Project": "SIT",
"Frontend": 2,
"FrontendColor": "hsl(161, 70%, 50%)",
      "Backend": 3,
      "BackendColor": "hsl(294, 70%, 50%)",
      "Fullstack": 2,
      "FullstackColor": "hsl(204, 70%, 50%)",
      "Devops": 1,
      "DevopsColor": "hsl(160, 70%, 50%)",
      "Manager": 1,
      "ManagerColor": "hsl(187, 70%, 50%)",
      "donut": 3,
      "donutColor": "hsl(261, 70%, 50%)"
    },
    {
      "Project": "Rolex",
"Frontend": 4,
"FrontendColor": "hsl(215, 70%, 50%)",
      "Backend": 2,
      "BackendColor": "hsl(84, 70%, 50%)",
      "Fullstack": 2,
      "FullstackColor": "hsl(5, 70%, 50%)",
      "Devops": 1,
      "DevopsColor": "hsl(74, 70%, 50%)",
      "Manager": 2,
      "ManagerColor": "hsl(233, 70%, 50%)",
      "donut": 5,
      "donutColor": "hsl(313, 70%, 50%)"
    },
    {
      "Project": "Levi's",
      "Frontend": 1,
      "FrontendColor": "hsl(288, 70%, 50%)",
      "Backend": 4,
      "BackendColor": "hsl(129, 70%, 50%)",
      "Fullstack": 1,
      "FullstackColor": "hsl(261, 70%, 50%)",
      "Devops": 2,
      "DevopsColor": "hsl(138, 70%, 50%)",
      "Manager": 1,
      "ManagerColor": "hsl(231, 70%, 50%)",
      "donut": 164,
      "donutColor": "hsl(32, 70%, 50%)"
    }
  ]

const MyResponsiveBar = () => {
    return (
        <Wrap>
             <div>
            <p>Employee project ratio</p>
            <hr/>
            </div>
    <BarWrap style={{height: 450, width:700}}>
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
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
            {
                // id: 'lines',
                // type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
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
                    '0.3'
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
