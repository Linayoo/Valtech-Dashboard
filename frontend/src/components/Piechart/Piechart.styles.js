import styled from "styled-components"

export const PieWrap  = styled.div`
display: flex;
justify-content: center;
`;

export const Wrap  = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-left: 8px;
margin-left: 1%;
margin-top: 4%;
height: 510px;
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
    color: #999999;
    font-size: 15px;
    font-weight: bold;
    margin-left: 15px;
}

hr {
    width: 500px;
    margin-top: 20px;
    border: none;
    height: 2px;
    background-color: #80808038;
}
`;