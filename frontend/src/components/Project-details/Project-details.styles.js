import styled from "styled-components"

export const ProjectDetailsWrapper  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 110px;
margin-left: 30px;
width: 100vw;
height: 100vh;

h1 {
    color: #5f5e5e;
    margin-left: 60px;
    margin-bottom: 10px;
}

hr {
    color: #5f5e5e42;
    border: none;
    height: 2px;
    background-color: #8080803e;
    width: 800px;
    margin-bottom: 20px;
    margin-left: 60px;
}

div:not(:first-child) {
    display: flex;
    width: 1000px;
    justify-content: space-evenly;
}

p {
    font-size: 20px;
    color: grey;
    width: 400px;
    padding: 20px 0;
}

p:first-child {
    font-weight: bolder;
}
`;