import styled from "styled-components"

export const HeaderContainer  = styled.div`
display: flex;
align-items: center;
width: 100vw;
justify-content: flex-end;
position: absolute;
padding: 15px;
border-bottom: 1px solid #5a575712;

img {
    height: 40px;
}

button {
    background: none;
    border: none;
}

p {
    color: #5a5757d2;
    margin-left: 15px;
    margin-right: 10px;
    font-family: Helvetica, sans-serif;
    font-size: larger;
}
`;