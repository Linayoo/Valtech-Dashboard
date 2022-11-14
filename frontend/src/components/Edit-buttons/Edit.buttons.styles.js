import styled from "styled-components";


export const EditButtonsContainer = styled.div`
border: 1px solid #4f4c4b4a;
height:100px;
width: 100px;
background-color: white;
position: absolute;
z-index: 2;
display: flex;
flex-direction: column;
margin-left: 40px;
margin-top: -120px;
border-radius: 3px;
box-shadow: 1px 1px 10px #888;

div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    width: 100px;
    padding: 10px;


button:nth-of-type(1) {
    border: none;
}

}

button {
    color:black;
    background-color: white;
    color: grey;
    margin-left: 15px;
}



button:first-child {
    display: none;
   width: 17px;
   height: 17px;
   border: none;
   color: grey;
   position: absolute;
   margin-left: 100px;
   margin-top: -20px;
}

div:first-of-type {
    border-bottom: 1px solid #4f4c4b42;
}


`;