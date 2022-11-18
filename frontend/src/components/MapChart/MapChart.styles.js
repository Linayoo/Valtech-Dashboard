import styled from "styled-components"

export const MapWrap  = styled.div`
height: 430px;
width: 1250px;
`;

export const Wrap  = styled.div`
height: 100%;
/*width: 100%;*/
background-color: white;
border-radius: 10px;
box-shadow: 0 0 15px #9999;

/*@media only screen and (min-width: 1500px) {
    width: 1500px;
}*/


div {
    display: flex;
    flex-direction: column;
}

p {
    color :#1b253d;
    font-size: 15px;
    font-weight: bold;
    margin-left: 35px;
    margin-top: 15px;
    padding: 3px;
}

hr {
    width: 100%;
    margin-top: 5px;
    border: none;
    height: 2px;
    background-color: #1b253d21;
}
`