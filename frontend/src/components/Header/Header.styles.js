import styled from "styled-components"

export const HeaderContainer  = styled.div`
display: flex;
align-items: center;
width: 100vw;
justify-content: flex-end;
position: absolute;
margin-top: auto;
padding: 15px;
border-bottom: 1px solid #5a575712;



img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

button {
    background: none;
    border: none;
    margin-left: 15px;
    margin-right: 10px;
}

p {
    display: flex;
    align-items: center;
    color: #5a5757d2;
    margin-left: 15px;
    margin-right: 5px;
    font-family: Helvetica, sans-serif;
    color: #1b253d;
    font-weight: bolder;
}
`;