import { ResponsiveChoropleth } from '@nivo/geo'
import { MapWrap, Wrap } from './MapChart.styles'
import countries from "./world_countries.json";
import data from "./data";




const MyResponsiveChoropleth = () => (
    <Wrap>
        <div>
            <p>Client distribution by country</p>
            <hr />
        </div>
        <MapWrap>
            <ResponsiveChoropleth
                data={data}
                features={countries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="purples"
                domain={[0, 1000000]}
                unknownColor="#380276"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.55, 0.7]}
                projectionRotation={[0, 0, 0]}
                graticuleLineWidth={1.5}
                graticuleLineColor="#e8e8e8"
                borderColor="#152538"
                // defs={[
                //     {
                //         id: 'dots',
                //         type: 'patternDots',
                //         background: 'inherit',
                //         color: '#38bcb2',
                //         size: 4,
                //         padding: 1,
                //         stagger: true
                //     },
                //     {
                //         id: 'lines',
                //         type: 'patternLines',
                //         background: 'inherit',
                //         color: '#eed312',
                //         rotation: -45,
                //         lineWidth: 6,
                //         spacing: 10
                //     },
                //     {
                //         id: 'gradient',
                //         type: 'linearGradient',
                //         colors: [
                //             {
                //                 offset: 0,
                //                 color: '#000'
                //             },
                //             {
                //                 offset: 100,
                //                 color: 'inherit'
                //             }
                //         ]
                //     }
                // ]}
                // fill={[
                //     {
                //         match: {
                //             id: 'CAN'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'CHN'
                //         },
                //         id: 'lines'
                //     },
                //     {
                //         match: {
                //             id: 'ATA'
                //         },
                //         id: 'gradient'
                //     }
                // ]}
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: false,
                        translateX: 182,
                        translateY: -43,
                        itemWidth: 82,
                        itemHeight: 18,
                        itemsSpacing: 4,
                        symbolSize: 20,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#777',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                    itemBackground: '#f7fafb'
                                }
                            }
                        ]
                    }
                ]} />
        </MapWrap>
    </Wrap>
)

export default MyResponsiveChoropleth;