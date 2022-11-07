import styled from "styled-components"

export const InsightsContainer  = styled.div`
display: flex;
background-color: #8080801e;
/* flex-wrap: wrap; */
width: 100vw;
height: 100vh;
`;

export const WidgetFlexWrap  = styled.div`
display: flex;
height: 200px;

`;

export const MainFlexWrap  = styled.div`
display: flex;
flex-direction: column;

@media only screen and (min-width: 1500px) {
    margin-left: 10%;
    margin-top: 2%;
}


`;

export const ChartsFlexWrap  = styled.div`
display: flex;

@media only screen and (min-width: 1500px) {
    margin-top: 2%;

}


`;