import { ResponsivePie } from '@nivo/pie'
import { PieWrap, Wrap } from './Piechart.styles'
import { useState, useEffect } from "react"


const MyResponsivePie = () => {
    
    
    let localToken = localStorage.getItem("valtech-auth")
    const [consultants, setConsultants] = useState()
    
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
    }, []);
    
    const filterpositions = () => {
        let cons = {
            front: [],
            back: [],
            full: [],
            dev: [],
            man: [],
        }
        consultants.forEach((element) => {
            if (element.role_category === 'frontend') {
                cons.front.push(element)
            } else if (element.role_category === 'backend') {
                cons.back.push(element)
            } else if (element.role_category === 'devops') {
                cons.dev.push(element)
            } else if (element.role_category === 'fullstack') {
                cons.full.push(element)
            } else if (element.role_category === 'manager') {
                cons.man.push(element)
            }
        })
        return cons
    }

    const data = [
        {
          "id": "Frontend",
          "label": "Frontend",
          "value": `${consultants === undefined ? 'Loading...' : filterpositions().front.length}`,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "Backend",
          "label": "Backend",
          "value": `${consultants === undefined ? 'Loading...' : filterpositions().back.length}`,
          "color": "hsl(118, 70%, 50%)"
        },
        {
          "id": "Fullstack",
          "label": "Fullstack",
          "value": `${consultants === undefined ? 'Loading...' : filterpositions().full.length}`,
          "color": "hsl(105, 70%, 50%)"
        },
        {
          "id": "DevOps",
          "label": "Devops",
          "value": `${consultants === undefined ? 'Loading...' : filterpositions().dev.length}`,
          "color": "hsl(61, 70%, 50%)"
        },
        {
          "id": "Manager",
          "label": "Manager",
          "value": `${consultants === undefined ? 'Loading...' : filterpositions().man.length}`,
          "color": "hsl(350, 70%, 50%)"
        }
      ]
    
    return (
        <Wrap>
            <div>
            <p>Employee's currently working at Valtech</p>
            <hr/>
            </div>
            {/* style={{height: 400, width:500}} */}
    <PieWrap>
    <ResponsivePie
        data={data}
        margin={{ top: 25, right: 100, bottom: 100, left: 100 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={15}
        colors={{ scheme: 'purple_orange' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={23}
        arcLinkLabelsTextColor="grey"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="id"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ theme: 'background' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
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
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
       
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 76,
                itemsSpacing: 0,
                itemWidth: 75,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        
    />
    </PieWrap>
    </Wrap>
    )
}

export default MyResponsivePie
