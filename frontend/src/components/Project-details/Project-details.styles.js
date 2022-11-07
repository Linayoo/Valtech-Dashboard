import styled from "styled-components"

export const ProjectDetailsWrapper  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 110px;
margin-left: 10px;
width: 100vw;
height: 100vh;

div > button {
    margin-left: 800px;
    height: 25px;
    width: 60px;
    margin-top: 20px;
    position: absolute;

}


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
    justify-content: flex-start;
    width: 100%;
    margin-left: 60px;
}

p {
    font-size: 20px;
    color: grey;
    width: 400px;
    padding: 10px 0;

}

p:first-child {
    font-weight: bolder;
}
`;