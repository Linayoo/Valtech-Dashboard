import styled from "styled-components";


export const ProjectResultsContainer = styled.div`
position: sticky;
margin-top: 0%;
margin-left: 2%;
width: 100%;
color: grey;
height: 500px;

p {
    margin-left: 40%;
    margin-bottom: -0%;
    font-style: italic;
}

table {
    width: 100%;
 
}

table > tr:first-of-type{
   background-color: #f3e9e94;
}

table > tr{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 50px;
    margin: 5px;
    border-radius: 5px;
}


table > tr > th {
    display: flex;
    width: 160px;
    justify-content: center;
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

table > tr > td {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: center;
    background-color: white;
    height: 50px;
    padding: 15px;
}

table > tr > td:nth-of-type(1), td:nth-of-type(2), td:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
   
}

table > tr > th:nth-of-type(1), th:nth-of-type(2), th:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
   
}

table > tr > td:last-of-type {
    margin-left: -30px;
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
table > tr > td:nth-of-type(7) > button {
    width: 75px;
    background-color: #CEDCCF;
    margin-left: -25px;
}

table > tr > td > button:hover {
    opacity: 0.7;
}



table >  tr > td:nth-of-type(8) > button:last-of-type {
    /* background-color: #F5A69F; */
    color: black;
}

tr {
  border: 1px solid transparent;
}
tr:hover td{
  cursor:pointer;
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
`;

export const OverFlow= styled.div`
overflow-y: auto;
`;