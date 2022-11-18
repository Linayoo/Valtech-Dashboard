import styled from "styled-components"

export const InsightsContainer = styled.div`
display: flex;
background-color: #8080801e;
height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
flex-direction: row;

.header {
    position:sticky;
    margin-left: -300px;
}

.right {
    display: flex;
    flex-direction: column;
    margin-left: 260px;
}

.widgets {
    margin-top: 35px;
    justify-content:space-between;
}

.widgets,
.charts,
.mapchart {
    display: flex;
    flex-direction: row;
}

.mapchart {
    margin-top:15px;
    margin-left: 15px;
}

.sidenav {
    position: fixed;
    width: 100%;
}

.asd {
    margin-top: 20px;
    opacity:0;
}

`;

/*export const HeaderStyle = styled.div`
position: sticky;
`;


export const SideNavStyle = styled.div`
position: fixed;
width: 100%;
`;

export const WidgetFlexWrap = styled.div`
display: flex;
height: 200px;
margin-left: 10%;
flex-direction: row;
flex-wrap: nowrap;
justify-content:flex-start;

`;

export const MainFlexWrap = styled.div`
display: flex;
flex-direction: column;
margin-left: 0%;

@media only screen and (min-width: 1500px) {
    margin-left: 10%;
    margin-top: 2%;
}


`;

export const ChartsFlexWrap = styled.div`
display: flex;
margin-left: 10%;

@media only screen and (min-width: 1500px) {
    margin-top: 2%;

}


`;*/