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
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px; */
  display: flex;
  width: 620px;
  justify-content: space-evenly;
}

input, select {
    height: 35px;
    color: #1b253d;
    border: #342e2e;
    font-weight: bolder;
    font-size: 15px;
    border-radius: 3px;
    padding-left: 20px;
    margin-right: 10px;
 } 

input::placeholder{
    color: #808080b1;
}

select::placeholder{
    color: #808080b1;
}

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
    background-color: #80808013;
}
`;

export const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 700px;
`;

export const GridItem = styled.div`
width: 100%;
/* margin-left: 10px; */
button {
    border: none;
    margin-left: -2px;
}
input {
    padding: 10px;
}
.placeholder::placeholder {
    color: #1b253d;
    padding-left: 8px;
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


