import styled from "styled-components";


export const ProjectFilterContainer = styled.div`
height: 180px;
width: 800px;
position: sticky;
z-index: 1;
margin-left: 5%;
margin-top: 70px;
padding: 15px;


h1 {
    /* color: #808080d9; */
    color: #1b253d;
    font-weight: bolder;
    /* font-weight: lighter; */
    padding: 5px;
    margin-bottom:15px;
}

form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 35px; */
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}

input, select {
    height: 35px;
    color: #808080b1;
    border: #342e2e;
    font-size: 15px;
    border-radius: 3px;
    padding-left: 20px;
 } 

input::placeholder{
    color: #808080b1;
}

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
}
`;

export const Flex = styled.div`
display: flex;
align-items: center;

`;

export const GridItem = styled.div`
grid-column: span 2;
width: 80%;
button {
    border: none;
    margin-left: -2px;
}
input {
    padding: 10px;
}
`;

export const HeaderStyle = styled.div`
display: flex;
align-items: center;
button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 150px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:20px;
    margin-bottom: 7px;
    font-size: 15px;
}

button:hover {
    background-color: #220641;
    color: white;
}
`;


