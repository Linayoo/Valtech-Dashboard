import styled from "styled-components";


export const FilterContainer = styled.div`
height: 200px;
width: 800px;
position: sticky;
z-index: 1;
margin-left: 5%;
margin-top: 70px;
padding: 15px;

h1 {
    color: #808080d9;
    font-weight: lighter;
    padding: 5px;
    margin-bottom:5px;
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

button {
    height: 30px;
    width: 100px;
    color: grey;
    border-radius: 25px;
    border: 1px solid #837b7b5d;
    margin-left: 20px;
    font-size: 15px;
}

button:hover {
    transform: scale(0.9);
}
`;