import styled from "styled-components";


export const CreateConsultantContainer  = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #8080800;
width: 100vw;
height: 100vh;
padding-top: 6%;
padding-left: 5%;

h1 {
    margin-bottom: 5px;
    color: #1b253d;
    font-weight: bolder;
}

hr {
    width: 450px;
    border: none;
    height: 2px;
    background-color: grey;
}

button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    padding: 10px 0;
    width: 120px;
    font-weight: bolder;
    border-radius: 5px;
    font-size: 15px;
    margin-top: 10%;
    margin-left: 0%;
}


button:hover {
    background-color: #220641;
    color: white;
}

form {
    display: flex;
    margin-top: 30px;
}

label, input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.test {
    height: -webkit-fit-content;
}

div {
    color: #1b253d;
    font-weight: bolder;
}

form > div {
    width: 330px;
    display: flex;
    flex-direction: column;
}

input, select {
   display: flex;
   border-top: none;
   border-left: none;
   border-right: none;
   border-bottom: 2px solid grey;
   background-color: transparent;
   width: 300px;
   height: 25px;
   margin-top:0px;
   margin-bottom: 30px;
   color: #646464b0;
   font-size: 18px;
}

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
}

.tools-search,
.tools-onproject {
    display: flex;
    flex-direction: row;
}

.tools-input {
    margin-bottom: 40px;
}

.tools-child {
    width: 100%;
}

.tools-tags {
    display: flex;
    flex-direction: row;
    border-left: 10px;
}

`;
