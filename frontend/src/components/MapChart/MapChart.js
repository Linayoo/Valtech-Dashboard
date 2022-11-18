import { ResponsiveChoropleth } from '@nivo/geo'
import { MapWrap, Wrap } from './MapChart.styles'
import countries from "./world_countries.json";
import data from "./data";
import { useEffect } from 'react';
import { useState } from 'react';

const MyResponsiveChoropleth = () => {

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

    const filter = () => {
        let obj = {
            at: [],
            be: [],
            dk: [],
            fi: [],
            fr: [],
            de: [],
            hu: [],
            it: [],
            ch: [],
            nl: [],
            es: [],
            ua: [],
            uk: [],

        }

        consultants.forEach((e) => {
            if (e.country === 'Switzerland') {
                obj.ch.push(e)
            } else if (e.country === 'UK') {
                obj.uk.push(e)
            } else if (e.country === 'Austria') {
                obj.at.push(e)
            } else if (e.country === 'Belgium') {
                obj.be.push(e)
            } else if (e.country === 'Denmark') {
                obj.dk.push(e)
            } else if (e.country === 'Finland') {
                obj.fi.push(e)
            } else if (e.country === 'France') {
                obj.fr.push(e)
            } else if (e.country === 'Germany') {
                obj.de.push(e)
            } else if (e.country === 'Hungary') {
                obj.hu.push(e)
            } else if (e.country === 'Italy') {
                obj.it.push(e)
            } else if (e.country === 'Netherlands') {
                obj.nl.push(e)
            } else if (e.country === 'Spain') {
                obj.es.push(e)
            } else if (e.country === 'Ukraine') {
                obj.ua.push(e)
            }
            return obj
        })


        let data = [
        {
          "id": "AFG",
          "value": 0
        },
        {
          "id": "AGO",
          "value": 0
        },
        {
          "id": "ALB",
          "value": 0
        },
        {
          "id": "ARE",
          "value": 0
        },
        {
          "id": "ARG",
          "value": 0
        },
        {
          "id": "ARM",
          "value": 0
        },
        {
          "id": "ATA",
          "value": 0
        },
        {
          "id": "ATF",
          "value": 0
        },
        {
          "id": "AUT",
          "value": obj.at.length
        },
        {
          "id": "AZE",
          "value": 0
        },
        {
          "id": "BDI",
          "value": 0
        },
        {
          "id": "BEL",
          "value": obj.be.length
        },
        {
          "id": "BEN",
          "value": 0
        },
        {
          "id": "BFA",
          "value": 0
        },
        {
          "id": "BGD",
          "value": 0
        },
        {
          "id": "BGR",
          "value": 0
        },
        {
          "id": "BHS",
          "value": 0
        },
        {
          "id": "BIH",
          "value": 0
        },
        {
          "id": "BLR",
          "value": 0
        },
        {
          "id": "BLZ",
          "value": 0
        },
        {
          "id": "BOL",
          "value": 0
        },
        {
          "id": "BRN",
          "value": 0
        },
        {
          "id": "BTN",
          "value": 0
        },
        {
          "id": "BWA",
          "value": 0
        },
        {
          "id": "CAF",
          "value": 0
        },
        {
          "id": "CAN",
          "value": 0
        },
        {
          "id": "CHE",
          "value": obj.ch.length
        },
        {
          "id": "CHL",
          "value": 0
        },
        {
          "id": "CHN",
          "value": 0
        },
        {
          "id": "CIV",
          "value": 0
        },
        {
          "id": "CMR",
          "value": 0
        },
        {
          "id": "COG",
          "value": 0
        },
        {
          "id": "COL",
          "value": 0
        },
        {
          "id": "CRI",
          "value": 0
        },
        {
          "id": "CUB",
          "value": 0
        },
        {
          "id": "-99",
          "value": 0
        },
        {
          "id": "CYP",
          "value": 0
        },
        {
          "id": "CZE",
          "value": 0
        },
        {
          "id": "DEU",
          "value": obj.de.length
        },
        {
          "id": "DJI",
          "value": 0
        },
        {
          "id": "DNK",
          "value": obj.dk.length
        },
        {
          "id": "DOM",
          "value": 0
        },
        {
          "id": "DZA",
          "value": 0
        },
        {
          "id": "ECU",
          "value": 0
        },
        {
          "id": "EGY",
          "value": 0
        },
        {
          "id": "ERI",
          "value": 0
        },
        {
          "id": "ESP",
          "value": obj.es.length
        },
        {
          "id": "EST",
          "value": 0
        },
        {
          "id": "ETH",
          "value": 0
        },
        {
          "id": "FIN",
          "value": obj.fi.length
        },
        {
          "id": "FJI",
          "value": 0
        },
        {
          "id": "FLK",
          "value": 0
        },
        {
          "id": "FRA",
          "value": obj.fr.length
        },
        {
          "id": "GAB",
          "value": 0
        },
        {
          "id": "GBR",
          "value": obj.uk.length
        },
        {
          "id": "GEO",
          "value": 0
        },
        {
          "id": "GHA",
          "value": 0
        },
        {
          "id": "GIN",
          "value": 0
        },
        {
          "id": "GMB",
          "value": 0
        },
        {
          "id": "GNB",
          "value": 0
        },
        {
          "id": "GNQ",
          "value": 0
        },
        {
          "id": "GRC",
          "value": 0
        },
        {
          "id": "GTM",
          "value": 0
        },
        {
          "id": "GUY",
          "value": 0
        },
        {
          "id": "HND",
          "value": 0
        },
        {
          "id": "HRV",
          "value": 0
        },
        {
          "id": "HTI",
          "value": 0
        },
        {
          "id": "HUN",
          "value": obj.hu.length
        },
        {
          "id": "IDN",
          "value": 0
        },
        {
          "id": "IND",
          "value": 0
        },
        {
          "id": "IRL",
          "value": 0
        },
        {
          "id": "IRN",
          "value": 0
        },
        {
          "id": "IRQ",
          "value": 0
        },
        {
          "id": "ISL",
          "value": 0
        },
        {
          "id": "ISR",
          "value": 0
        },
        {
          "id": "ITA",
          "value": obj.it.length
        },
        {
          "id": "JAM",
          "value": 0
        },
        {
          "id": "JOR",
          "value": 0
        },
        {
          "id": "JPN",
          "value": 0
        },
        {
          "id": "KAZ",
          "value": 0
        },
        {
          "id": "KEN",
          "value": 0
        },
        {
          "id": "KGZ",
          "value": 0
        },
        {
          "id": "KHM",
          "value": 0
        },
        {
          "id": "OSA",
          "value": 0
        },
        {
          "id": "KWT",
          "value": 0
        },
        {
          "id": "LAO",
          "value": 0
        },
        {
          "id": "LBN",
          "value": 0
        },
        {
          "id": "LBR",
          "value": 0
        },
        {
          "id": "LBY",
          "value": 0
        },
        {
          "id": "LKA",
          "value": 0
        },
        {
          "id": "LSO",
          "value": 0
        },
        {
          "id": "LTU",
          "value": 0
        },
        {
          "id": "LUX",
          "value": 0
        },
        {
          "id": "LVA",
          "value": 0
        },
        {
          "id": "MAR",
          "value": 0
        },
        {
          "id": "MDA",
          "value": 0
        },
        {
          "id": "MDG",
          "value": 0
        },
        {
          "id": "MEX",
          "value": 0
        },
        {
          "id": "MKD",
          "value": 0
        },
        {
          "id": "MLI",
          "value": 0
        },
        {
          "id": "MMR",
          "value": 0
        },
        {
          "id": "MNE",
          "value": 0
        },
        {
          "id": "MNG",
          "value": 0
        },
        {
          "id": "MOZ",
          "value": 0
        },
        {
          "id": "MRT",
          "value": 0
        },
        {
          "id": "MWI",
          "value": 0
        },
        {
          "id": "MYS",
          "value": 0
        },
        {
          "id": "NAM",
          "value": 0
        },
        {
          "id": "NCL",
          "value": 0
        },
        {
          "id": "NER",
          "value": 0
        },
        {
          "id": "NGA",
          "value": 0
        },
        {
          "id": "NIC",
          "value": 0
        },
        {
          "id": "NLD",
          "value": obj.nl.length
        },
        {
          "id": "NOR",
          "value": 0
        },
        {
          "id": "NPL",
          "value": 0
        },
        {
          "id": "NZL",
          "value": 0
        },
        {
          "id": "OMN",
          "value": 0
        },
        {
          "id": "PAK",
          "value": 0
        },
        {
          "id": "PAN",
          "value": 0
        },
        {
          "id": "PER",
          "value": 0
        },
        {
          "id": "PHL",
          "value": 0
        },
        {
          "id": "PNG",
          "value": 0
        },
        {
          "id": "POL",
          "value": 0
        },
        {
          "id": "PRI",
          "value": 0
        },
        {
          "id": "PRT",
          "value": 0
        },
        {
          "id": "PRY",
          "value": 0
        },
        {
          "id": "QAT",
          "value": 0
        },
        {
          "id": "ROU",
          "value": 0
        },
        {
          "id": "RUS",
          "value": 0
        },
        {
          "id": "RWA",
          "value": 0
        },
        {
          "id": "ESH",
          "value": 0
        },
        {
          "id": "SAU",
          "value": 0
        },
        {
          "id": "SDN",
          "value": 0
        },
        {
          "id": "SDS",
          "value": 0
        },
        {
          "id": "SEN",
          "value": 0
        },
        {
          "id": "SLB",
          "value": 0
        },
        {
          "id": "SLE",
          "value": 0
        },
        {
          "id": "SLV",
          "value": 0
        },
        {
          "id": "ABV",
          "value": 0
        },
        {
          "id": "SOM",
          "value": 0
        },
        {
          "id": "SRB",
          "value": 0
        },
        {
          "id": "SUR",
          "value": 0
        },
        {
          "id": "SVK",
          "value": 0
        },
        {
          "id": "SVN",
          "value": 0
        },
        {
          "id": "SWE",
          "value": 0
        },
        {
          "id": "SYR",
          "value": 0
        },
        {
          "id": "TCD",
          "value": 0
        },
        {
          "id": "TGO",
          "value": 0
        },
        {
          "id": "THA",
          "value": 0
        },
        {
          "id": "TJK",
          "value": 0
        },
        {
          "id": "TKM",
          "value": 0
        },
        {
          "id": "TLS",
          "value": 0
        },
        {
          "id": "TTO",
          "value": 0
        },
        {
          "id": "TUN",
          "value": 0
        },
        {
          "id": "TUR",
          "value": 0
        },
        {
          "id": "TWN",
          "value": 0
        },
        {
          "id": "TZA",
          "value": 0
        },
        {
          "id": "UGA",
          "value": 0
        },
        {
          "id": "UKR",
          "value": obj.ua.length
        },
        {
          "id": "URY",
          "value": 0
        },
        {
          "id": "USA",
          "value": 0
        },
        {
          "id": "UZB",
          "value": 0
        },
        {
          "id": "VEN",
          "value": 0
        },
        {
          "id": "VNM",
          "value": 0
        },
        {
          "id": "VUT",
          "value": 0
        },
        {
          "id": "PSE",
          "value": 0
        },
        {
          "id": "YEM",
          "value": 0
        },
        {
          "id": "ZAF",
          "value": 0
        },
        {
          "id": "ZMB",
          "value": 0
        },
        {
          "id": "ZWE",
          "value": 0
        },
        {
          "id": "KOR",
          "value": 0
        }
        ]
        return data
    }

    return (
        <Wrap>
            <div>
                <p>Employees distribution by country</p>
                <hr />
            </div>
            <MapWrap>
                <ResponsiveChoropleth
                    data={consultants === undefined ? data : filter()}
                    margin={{ top: 100, right: 0, bottom: 0, left: 0 }}
                    features={countries.features}
                    colors="purples"
                    domain={[ 0, 10]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".1s"
                    projectionScale={400}
                    projectionTranslation={[ 0.5, 1 ]}
                    projectionRotation={[ -8, -8, -3 ]}
                    enableGraticule={true}
                    graticuleLineWidth={0.5}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: false,
                            translateX: 182,
                            translateY: -110,
                            itemWidth: 82,
                            itemHeight: 18,
                            itemsSpacing: 4,
                            symbolSize: 20,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#777',
                            grades: [0,2,4,6],
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
}

export default MyResponsiveChoropleth;