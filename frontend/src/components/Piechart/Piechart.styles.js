import styled from "styled-components"

export const PieWrap  = styled.div`
display: flex;
justify-content: center;
height: 340px;
width: 400px;
`;

export const Wrap  = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-left: 8px;
margin-left: 1%;
margin-top: 1%;
height: 390px;
width: 450px;
background-color: #ffffffc8;
border-radius: 10px;
box-shadow: 0 0 15px #9999;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

p {
    color: #1b253d;
    font-size: 15px;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 10px;
}

hr {
    width: 450px;
    margin-top: 10px;
    margin-left: -8px;
    border: none;
    height: 2px;
    background-color: #80808038;
}
`;