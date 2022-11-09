import styled from "styled-components"

export const EditProjectContainer  = styled.div`
display: flex;
flex-direction: row;
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
    width: 30px;
    border: none;
    height: 2px;
    background-color: grey;
}

.tags {
    display: flex;
    flex-direction: column;
}

.search {
    display: flex;
    flex-direction: column;
}

button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 120px;
    font-weight: bolder;
    border-radius: 5px;
    font-size: 15px;
    margin-top: 9%;
    margin-left: 0%;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
    height: 300px;
}

label, input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

label {
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

`;