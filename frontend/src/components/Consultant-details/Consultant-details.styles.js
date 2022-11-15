import styled from "styled-components"

export const ConsultantDetailsWrapper  = styled.div`
margin-top: 90px;
margin-left: 5%;
width: 100vw;
height: 100vh;

div > p:last-child {
    color: #1b253d;
}

div > button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 100px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

div > button:hover {
    background-color: #220641;
    color: white;
}

div > button.deleteButton {
    width: 150px;
}


h1 {
    color: #1b253d;
    margin-bottom: 10px;
}

hr {
    color: #5f5e5e42;
    border: none;
    height: 2px;
    background-color: #8080803e;
    width: 570px;
    margin-bottom: 30px;
}


div:not(:first-child) {
    display: flex;
}

p {
    font-size: 17px;
    color: grey;
    width: 400px;
    padding: 10px 0;
    margin-top: -10px;
}

p:last-child {
    font-weight: 600;
    font-style: inherit;
}

h4 {
    font-weight: 400;
    color: white;
    background-color: black;
    border-radius: 16px;
    text-align: center;
    height: 30px;
    padding: 6px;
    margin-right: 8px;
}

a {
    outline: none;
    font-size: 17px;
    width: 400px;
    padding: 10px 0;
}

a:link {
    color: #1b253d;
}

a:hover {
    color: purple;
}

a:visited {
    color: purple;
}

`;

export const HeaderStyle  = styled.div`
display: flex;

`;



export const FlexColumn  = styled.div`
display: flex;
flex-direction: column;
width: 250px;

:nth-child(2) {
    width: 400px;
}

div {
    display: flex;
    flex-direction: column;
}
`;