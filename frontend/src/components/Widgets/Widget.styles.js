import styled from "styled-components"

export const WidgetWrap  = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding-left: 8px;
margin-left: 1%;
margin-top: 8%;
height: 120px;
width: 300px;
background-color: #ffffffc8;
border-radius: 10px;
box-shadow: 0 0 15px #9999;
color: #99a0b0;

:hover {
    transform: scale(1.1);
}

p {
    justify-self: flex-start;
    margin-left: 20px;
}

h1 {
    color: #1b253d;
    font-weight: bolder;
    margin-left: 70px;
    margin-top: 10px;
}

i {
    /* display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #E6E6FA;
    margin-left: 200px;
    margin-top: -60px; */
}
`;

