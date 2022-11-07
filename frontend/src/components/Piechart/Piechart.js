import { ResponsivePie } from '@nivo/pie'
import { PieWrap, Wrap } from './Piechart.styles'


const data = [
    {
      "id": "Frontend",
      "label": "Frontend",
      "value": 30,
      "color": "hsl(75, 70%, 50%)"
    },
    {
      "id": "Backend",
      "label": "Backend",
      "value": 20,
      "color": "hsl(118, 70%, 50%)"
    },
    {
      "id": "Fullstack",
      "label": "Fullstack",
      "value": 10,
      "color": "hsl(105, 70%, 50%)"
    },
    {
      "id": "DevOps",
      "label": "Devops",
      "value": 10,
      "color": "hsl(61, 70%, 50%)"
    },
    {
      "id": "Manager",
      "label": "Manager",
      "value": 20,
      "color": "hsl(350, 70%, 50%)"
    }
  ]
 

const MyResponsivePie = () => {
    return (
        <Wrap>
            <div>
            <p>Employee's currently working at Valtech</p>
            <hr/>
            </div>
    <PieWrap style={{height: 400, width:500}}>
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
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
