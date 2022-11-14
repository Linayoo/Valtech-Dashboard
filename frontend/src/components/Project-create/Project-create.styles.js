import styled from "styled-components";


export const CreateProjectContainer  = styled.div`
display: flex;
flex-direction: column;
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
    margin-top: 3%;
    margin-left: 0%;
}


button:hover {
    background-color: #220641;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
    height: 300px;
}

label, input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

div {
    color: #1b253d;
    font-weight: bolder;
}


input {
   display: flex;
   border-top: none;
   border-left: none;
   border-right: none;
   border-bottom: 2px solid grey;
   background-color: transparent;
   width: 300px;
   height: 25px;
   margin-top: 10px;
   margin-bottom: 20px;
   color: #646464b0;
   font-size: 18px;
}

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
}

.datepicker {
    height: 50px;
    margin-right: 30px;
}

.row {
    display: flex;
    flex-direction: row;
}

`;