import styled from "styled-components"

export const BarWrap  = styled.div`
/* display: flex;
justify-content: center; */
`;

export const Wrap  = styled.div`
/* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
margin-left: 10px;
margin-top: 4%;
height: 510px;
width: 680px;
background-color: #ffffffc8;
border-radius: 10px;
box-shadow: 0 0 15px #9999;

@media only screen and (min-width: 1500px) {
    width: 800px;
}


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
    margin-top: 30px;
}

hr {
    width: 680px;
    margin-top: 20px;
    margin-bottom: -20px;
    border: none;
    height: 2px;
    background-color: #80808038;
}
`