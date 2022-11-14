import styled from "styled-components";


export const ResultsContainer = styled.div`
position: sticky;
margin-top: -2%;
margin-left: 4%;
width: 100%;
color: grey;

p {
    margin-left: 2.5%;
    margin-bottom: -0%;
    font-style: italic;
}

table {
    width: 100%;
}

table > tr:first-of-type{
   background-color: #f3e9e94;
}

table > tr > th:nth-child(1) {
  margin-left: -21px;
}

table > tr > th:nth-child(2) {
  margin-left: 21px;
}

table > tr{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 15px;
    margin-top: 5px;
    border-radius: 5px;
}

table > div > tr{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
}

table > tr > th {
    display: flex;
    width: 150px;
    justify-content: flex-start;
    padding: 15px;
    color: #1b253d;
}



table > tr > th > button{
    background-color: none;
    border: none;
    color: grey;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}

table > div > tr > td:first-of-type {
    width: 160px;
}


table > div > tr > td {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: flex-start;
    background-color: white;
    height: 50px;
    padding: 15px;
}

table > div > tr > td:last-of-type {
    margin-left: 0px;
    padding-left: 0px;
    width: 150px;
}

table > tr > td > button {
    background: none;
    border:none;
    margin-right: 8px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 60px;
    color: white;
}

table > tr > td > button:hover {
    opacity: 0.7;
}

table > tr > td > button:first-of-type {
    background-color: #4680f49d;
}

table > tr > td > button:last-of-type {
    background-color: #ee6969;
}

tr {
  border: 1px solid transparent;
}
tr:hover td{
  cursor:pointer;
  color: #1b253d;
  /* font-weight: bold; */
  transform: scale(1.2);
  border-top: 1px solid #80808071;
  border-bottom: 1px solid #80808071;

}
tr:first-child:hover td {
  border-top: none;
}
tr:last-child:hover td {
  border-bottom: none;
}

div {
    position: relative;
    z-index: 4;
    height: 390px;
}
`;

export const OverFlow= styled.div`
overflow-y: auto;

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #ffffff95;
  box-shadow: inset 0 0 5px #9ea3ac49; 
  border-radius: 10px;
  border: 1px solid #a9abb05f;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1b253d;  
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1b253da1; 
}
`;